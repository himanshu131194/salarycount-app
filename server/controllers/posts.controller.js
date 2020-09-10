import Profiles from '../models/profiles.model'
import Videos from '../models/videos.model'
import Categories from '../models/categories.model'
import Websites from '../models/websites.model'
import mongoose from 'mongoose'
import CONFIG from '../../config';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import AWS, { Pricing } from 'aws-sdk'
import rp from 'request-promise'
import _ from 'lodash'

const s3 = new AWS.S3({
    accessKeyId: CONFIG.S3.ACCESS,
    secretAccessKey: CONFIG.S3.SECRET,
    region: 'ap-south-1'
});

const uploadToS3 = async (externalUrl=null, data64=null, path='uploads', uploadType=null)=>{
    console.log('s3-upload');
    try{
        let result = null, base64 = null, mime = null, ext = null;
        let listOfSupportedExtns = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'mp4'];
        if(data64){
                result = Buffer.from(data64.replace(/^data:image\/\w+;base64,/, ""), 'base64');
                ext = req.body.ext;
        }else{
                result = await rp({url: externalUrl, encoding: null});
                let buff = new Buffer(result);
                    ext = (externalUrl).split('.').pop();
                    base64 = `data:image/${ext};base64,`+buff.toString('base64');
        }
        const slugId = uuidv4();
        ext = listOfSupportedExtns.indexOf(ext)<0 ? 'jpg': ext;
        const base64Data = result;
        const type = uploadType==='video'? `video/mp4` : `image/${ext}`;
        // const key = `${path}/${moment().format('DD-MM-YYYY')}/${slugId}.${ext}`;
        const key = uploadType==='video'? `${path}/${slugId}.mp4` : `${path}/${slugId}.${ext}`;
        const params = {
              Bucket: CONFIG.S3.BUCKET,
              Key: key,
              Body: base64Data,
              ContentType: type
        }
        let s3Result = null;
        if(uploadType==='video'){
            // s3Result = s3.upload(params);
            // s3Result.on('httpUploadProgress', function (progress) {
            //     console.log(progress.loaded + " of " + progress.total + " bytes");
            // });
            // s3Result.send();
            fs.writeFileSync(`${path}/${slugId}.mp4`, result);
        }else{
            s3Result = await s3.putObject(params).promise();
        }
        console.log({
            url : `https://${CONFIG.S3.BUCKET}.s3.ap-south-1.amazonaws.com/${key}`,
            key: key,
            slug: slugId,
            mime: type,
            ext
        });
       return {
            s3_url : `https://${CONFIG.S3.BUCKET}.s3.ap-south-1.amazonaws.com/${key}`,
            slug_id : slugId,
            mime: type,
            ext
       }
    }catch(e){
        console.log(e);
    }
}

export default {
    listOfProfileData: async (req, res)=>{
        const { model } = req.query;
        let categories = [], websites = [];

        if(model){
            const videos = await Videos.aggregate([
                { $match: { $expr : { $in : [ mongoose.Types.ObjectId(model), '$profiles' ] } } } 
            ]);
            for(let video of videos){
                categories = [...categories, ...video.categories];
                websites = [...websites, ...video.websites];
            }
            websites = _.uniq(websites);
            categories = _.uniq(categories);
        }else{
            categories = await Categories.aggregate([
                { $match: {}},
                { $sort: { videos_count: -1 } }
            ]).cache({ key: 'allcategories'});
            websites = await Websites.aggregate([
                { $match: {}},
                { $sort: { videos_count: -1 } }
            ]).cache({ key: 'allwebsites'});
        }
        res.send({
            data : { websites, categories }
        })
    },

    listOfVideosByModels : async (req, res)=>{
        console.log(req.query);
        let { offset: skip , limit, filters } = req.query;
        console.log(filters);
        let sort = { _id: -1 }, model = null, videoFilterPipeline = [];
        filters = JSON.parse(filters);

        if(filters.sort){
           sort = filters.sort;
        }
        if(filters.condition){
            model = filters.condition.model || null;
        }

        const filterObj = model ? { $expr : { $in : [ '$$profile_id', '$profiles' ] } }: {};        
        if(filters.condition.category.length>0 && filters.condition.website.length==0){
            videoFilterPipeline = [
                { $match: filterObj},
                {
                    $lookup: {
                        from: 'profiles',
                        localField: 'profiles',
                        foreignField: '_id',
                        as: 'profiles'
                    }
                },
                { $match: { categories : { $all: filters.condition.category }} },
                { $sort: sort},
                { $skip: +skip },
                { $limit: +limit },
            ]
        }else if(filters.condition.website.length>0 && filters.condition.category.length==0){
            videoFilterPipeline = [
                { $match: filterObj},
                {
                    $lookup: {
                        from: 'profiles',
                        localField: 'profiles',
                        foreignField: '_id',
                        as: 'profiles'
                    }
                },
                { $match: { websites : { $all: filters.condition.website }} },
                { $sort: sort},
                { $skip: +skip },
                { $limit: +limit },
            ]
        }else if(filters.condition.website.length==0 && filters.condition.category.length==0){
            videoFilterPipeline = [
                { $match: filterObj},
                {
                    $lookup: {
                        from: 'profiles',
                        localField: 'profiles',
                        foreignField: '_id',
                        as: 'profiles'
                    }
                },
                { $sort: sort},
                { $skip: +skip },
                { $limit: +limit },
            ]
        }else{
            videoFilterPipeline = [
                { $match: filterObj},
                {
                    $lookup: {
                        from: 'profiles',
                        localField: 'profiles',
                        foreignField: '_id',
                        as: 'profiles'
                    }
                },
                { $match: { $and : [ { websites : { $all: filters.condition.website }}, { categories : { $all: filters.condition.category }}] }},
                { $sort: sort},
                { $skip: +skip },
                { $limit: +limit },
            ]
        }
        let data;
        if(model){
            data = await Profiles.aggregate([
                { $match: { _id : mongoose.Types.ObjectId(model)} },
                {
                    $lookup:{
                        from: "videos",
                        let : { profile_id: '$_id' },
                        pipeline: videoFilterPipeline,
                        as: 'videos'
                    }
                }
            ]);
        }else{
            data = await Videos.aggregate(videoFilterPipeline);
        }

        res.send({
            data
        })
    },

    listOfProfiles : async (req, res)=>{
         console.log(req.body);
         const { offset:skip , limit, filters } = req.body;
         let filterObj = {}, sort = { videos_count: -1 };

         if(filters.sort){
            sort = filters.sort;
         }
         if(filters.condition){
            filterObj = filters.condition
         }
         try {
            const totalProfiles = await Profiles.count();
            const profiles = await Profiles.aggregate([
                { $match: filterObj},
                { $sort: sort},
                { $skip: +skip },
                { $limit: +limit }
            ]);
            res.send({
                data: profiles,
                count : totalProfiles
            })
         } catch (error) {
             res.send({
                 error
             })
         }
    },

    listOfAllWebsitesAndCategrories: async (req, res)=>{
        const allCategories = await Categories.aggregate([
            { $match: {}},
            { $sort: { videos_count: -1 }}
        ]);
        const allWebsites = await Websites.aggregate([
            { $match: {}},
            { $sort: { videos_count: -1 }}
        ]);
        res.send({
            data: { categories: allCategories, websites: allWebsites }
        })
    },

    listOfAllCategoriesFilteredByWebsites: async (req, res)=>{
        const { website } = req.query;
        const allCategories = await Videos.aggregate([
            { $match: { websites: { $in: [website.trim()] } }},
            { $project: { categories: 1 }}
        ]);
        let uniqueCategories = {}, selectedCategories = [], count=0;
        for(let category of allCategories){
            let { categories, _id } = category;
            for(let x of categories){
                uniqueCategories[x] ? ++uniqueCategories[x]: (uniqueCategories[x] = 1)
            }
        }
        for(let k in uniqueCategories){
            selectedCategories.push({
                _id: ++count,
                name : k,
                videos_count: uniqueCategories[k]
            })
        }
        res.send({
            data: { categories: selectedCategories }
        })
    },

    listVideos: async (req, res)=>{
        const {limit=10, offset:skip=0} = req.query;
        let filterObj = {}, sort= { _id: -1 };
        const videos = await Videos.aggregate([
            { $match: filterObj},
            { $sort: sort},
            { $skip: +skip },
            { $limit: +limit }
        ]);
        res.send({
            data : videos
        })
    }

}



