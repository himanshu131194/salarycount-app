import IndustriesTypes from '../models/industries_types.model'
import Locations from '../models/locations.model'
import Ratingrange from '../models/rating_range.model'
import employeesCountRange from '../models/employees_count_range.model'
import Tags from '../models/industries_tags.model'
import Company from '../models/companies.model'

import mongoose from 'mongoose'
import CONFIG from '../../config';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import AWS, { Pricing } from 'aws-sdk'
import request from 'request';
import rp from 'request-promise'
import _ from 'lodash'
// import { countReset } from 'console'

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
        return {
            s3_url : `https://salarycount.s3.ap-south-1.amazonaws.com/company/logos/company-placeholder.svg`,
            slug_id : null,
            mime: null,
            ext: null
        }
    }
}

export default {
    // listOfProfileData: async (req, res)=>{
    //     const { model } = req.query;
    //     let categories = [], websites = [];

    //     if(model){
    //         const videos = await Videos.aggregate([
    //             { $match: { $expr : { $in : [ mongoose.Types.ObjectId(model), '$profiles' ] } } } 
    //         ]);
    //         for(let video of videos){
    //             categories = [...categories, ...video.categories];
    //             websites = [...websites, ...video.websites];
    //         }
    //         websites = _.uniq(websites);
    //         categories = _.uniq(categories);
    //     }else{
    //         categories = await Categories.aggregate([
    //             { $match: {}},
    //             { $sort: { videos_count: -1 } }
    //         ]).cache({ key: 'allcategories'});
    //         websites = await Websites.aggregate([
    //             { $match: {}},
    //             { $sort: { videos_count: -1 } }
    //         ]).cache({ key: 'allwebsites'});
    //     }
    //     res.send({
    //         data : { websites, categories }
    //     })
    // },

    // listOfVideosByModels : async (req, res)=>{
    //     console.log(req.query);
    //     let { offset: skip , limit, filters } = req.query;
    //     console.log(filters);
    //     let sort = { _id: -1 }, model = null, videoFilterPipeline = [];
    //     filters = JSON.parse(filters);

    //     if(filters.sort){
    //        sort = filters.sort;
    //     }
    //     if(filters.condition){
    //         model = filters.condition.model || null;
    //     }

    //     const filterObj = model ? { $expr : { $in : [ '$$profile_id', '$profiles' ] } }: {};        
    //     if(filters.condition.category.length>0 && filters.condition.website.length==0){
    //         videoFilterPipeline = [
    //             { $match: filterObj},
    //             {
    //                 $lookup: {
    //                     from: 'profiles',
    //                     localField: 'profiles',
    //                     foreignField: '_id',
    //                     as: 'profiles'
    //                 }
    //             },
    //             { $match: { categories : { $all: filters.condition.category }} },
    //             { $sort: sort},
    //             { $skip: +skip },
    //             { $limit: +limit },
    //         ]
    //     }else if(filters.condition.website.length>0 && filters.condition.category.length==0){
    //         videoFilterPipeline = [
    //             { $match: filterObj},
    //             {
    //                 $lookup: {
    //                     from: 'profiles',
    //                     localField: 'profiles',
    //                     foreignField: '_id',
    //                     as: 'profiles'
    //                 }
    //             },
    //             { $match: { websites : { $all: filters.condition.website }} },
    //             { $sort: sort},
    //             { $skip: +skip },
    //             { $limit: +limit },
    //         ]
    //     }else if(filters.condition.website.length==0 && filters.condition.category.length==0){
    //         videoFilterPipeline = [
    //             { $match: filterObj},
    //             {
    //                 $lookup: {
    //                     from: 'profiles',
    //                     localField: 'profiles',
    //                     foreignField: '_id',
    //                     as: 'profiles'
    //                 }
    //             },
    //             { $sort: sort},
    //             { $skip: +skip },
    //             { $limit: +limit },
    //         ]
    //     }else{
    //         videoFilterPipeline = [
    //             { $match: filterObj},
    //             {
    //                 $lookup: {
    //                     from: 'profiles',
    //                     localField: 'profiles',
    //                     foreignField: '_id',
    //                     as: 'profiles'
    //                 }
    //             },
    //             { $match: { $and : [ { websites : { $all: filters.condition.website }}, { categories : { $all: filters.condition.category }}] }},
    //             { $sort: sort},
    //             { $skip: +skip },
    //             { $limit: +limit },
    //         ]
    //     }
    //     let data;
    //     if(model){
    //         data = await Profiles.aggregate([
    //             { $match: { _id : mongoose.Types.ObjectId(model)} },
    //             {
    //                 $lookup:{
    //                     from: "videos",
    //                     let : { profile_id: '$_id' },
    //                     pipeline: videoFilterPipeline,
    //                     as: 'videos'
    //                 }
    //             }
    //         ]);
    //     }else{
    //         data = await Videos.aggregate(videoFilterPipeline);
    //     }

    //     res.send({
    //         data
    //     })
    // },

    // listOfProfiles : async (req, res)=>{
    //      console.log(req.body);
    //      const { offset:skip , limit, filters } = req.body;
    //      let filterObj = {}, sort = { videos_count: -1 };

    //      if(filters.sort){
    //         sort = filters.sort;
    //      }
    //      if(filters.condition){
    //         filterObj = filters.condition
    //      }
    //      try {
    //         const totalProfiles = await Profiles.count();
    //         const profiles = await Profiles.aggregate([
    //             { $match: filterObj},
    //             { $sort: sort},
    //             { $skip: +skip },
    //             { $limit: +limit }
    //         ]);
    //         res.send({
    //             data: profiles,
    //             count : totalProfiles
    //         })
    //      } catch (error) {
    //          res.send({
    //              error
    //          })
    //      }
    // },

    // listOfAllWebsitesAndCategrories: async (req, res)=>{
    //     const allCategories = await Categories.aggregate([
    //         { $match: {}},
    //         { $sort: { videos_count: -1 }}
    //     ]);
    //     const allWebsites = await Websites.aggregate([
    //         { $match: {}},
    //         { $sort: { videos_count: -1 }}
    //     ]);
    //     res.send({
    //         data: { categories: allCategories, websites: allWebsites }
    //     })
    // },

    // listOfAllCategoriesFilteredByWebsites: async (req, res)=>{
    //     const { website } = req.query;
    //     const allCategories = await Videos.aggregate([
    //         { $match: { websites: { $in: [website.trim()] } }},
    //         { $project: { categories: 1 }}
    //     ]);
    //     let uniqueCategories = {}, selectedCategories = [], count=0;
    //     for(let category of allCategories){
    //         let { categories, _id } = category;
    //         for(let x of categories){
    //             uniqueCategories[x] ? ++uniqueCategories[x]: (uniqueCategories[x] = 1)
    //         }
    //     }
    //     for(let k in uniqueCategories){
    //         selectedCategories.push({
    //             _id: ++count,
    //             name : k,
    //             videos_count: uniqueCategories[k]
    //         })
    //     }
    //     res.send({
    //         data: { categories: selectedCategories }
    //     })
    // },

    // listVideos: async (req, res)=>{
    //     const {limit=10, offset:skip=0} = req.query;
    //     let filterObj = {}, sort= { _id: -1 };
    //     const videos = await Videos.aggregate([
    //         { $match: filterObj},
    //         { $sort: sort},
    //         { $skip: +skip },
    //         { $limit: +limit }
    //     ]);
    //     res.send({
    //         data : videos
    //     })
    // },

    fetchCompaniesMetainfo: async (req, res)=>{
        // const ambitionBox = `https://www.ambitionbox.com/api/v2/companyListingFilters?type=all`;
        // const {data: { employee_count_range }} = await rp({ 
        //     uri: ambitionBox,
        //     json: true
        // });

        // for(let x of employee_count_range){
        //     let ind = new employeesCountRange({
        //         name: x.Name,
        //         url: x.UrlName,
        //         count: x.count
        //     })
        //     let result = await ind.save();
        //     console.log(result);
        // }
        // res.send({ result : "completed" })

        let counter = 15732;
        let callit = async ()=>{
            ++counter;
            console.log(`https://www.ambitionbox.com/api/v2/companyListingInfo?page=${counter}&sort=popularity`);
            const companiesInfo = `https://www.ambitionbox.com/api/v2/companyListingInfo?page=${counter}&sort=popularity`;
            const {data: { listing }} = await rp({ 
                uri: companiesInfo,
                json: true
            });
            if(listing && listing.length>0){
                //UPDATE DB
                let getInsdustries = async (result)=>{
                    if(result.length==0){
                        return result
                    }
                    let industries = [];
                    for(let x of result){
                        let isExists = await IndustriesTypes.findOne({name: x.Name});
                        if(isExists){
                            industries.push(isExists._id);
                        }
                    }
                    return industries;
                }
                let getTags = async (result)=>{
                    if(result.length==0){
                        return result
                    }
                    let tags = [];
                    for(let x of result){
                        let isExists = await Tags.findOne({name: x.Name});
                        if(isExists){
                            tags.push(isExists._id);
                        }
                    }
                    return tags;
                }
                let no = 1;
                for(let company of listing){
                    ++no;
                    // console.log(company);
                    let isExists = await Company.findOne({ CompanyId: company.CompanyId});
                    if(isExists){
                        continue;
                    }else{
                        let logoURL;
                        if(!company.Logo || company.Logo==""){
                           logoURL = "https://salarycount.s3.ap-south-1.amazonaws.com/company/logos/company-placeholder.svg";
                        }else{
                           logoURL = (await uploadToS3(`https://static.ambitionbox.com/alpha/company/photos/logos/${company.Logo}.jpg`, null, 'company/logos')).s3_url;
                        }
                        let record = new Company({
                            Name: company.Name,
                            Rating: company.Rating,
                            ShortName: company.ShortName,
                            CompanyId: company.CompanyId,
                            Age: company.Age,
                            About: company.About,
                            CompanyReviewsLive: company.CompanyReviewsLive,
                            CompanySalaries: company.CompanySalaries,
                            CompanyType: company.CompanyType,
                            HQCountry: company.HQCountry,
                            HQUrlName: company.HQUrlName,
                            InterviewExperiencesLive: company.InterviewExperiencesLive,
                            Logo: logoURL,
                            TotalEmployees: company.TotalEmployees,
                            UrlName: company.UrlName,
                            Locations: company.first_location,
                            Headquaters: company.headquaters=="" ? []: company.headquaters.toLowerCase(),
                            LocationCount: company.location_count,
                            Industries: company.industries? await getInsdustries(company.industries): [],
                            Tags: company.tags? await getTags(company.tags): [],
                            CrawledSource: `${companiesInfo}&no=${no}`
                        });
                        try {
                            let res = await record.save();
                            console.log(res);
                        } catch (error) {
                            console.log(error);
                        }
                    }
                }
                await callit();
            }
        }
        await callit();
        res.send({ result: "completed"});
    },

    listAllCompanies: async (req ,res)=>{
        let result = await Company.aggregate([
            {$match: {} },
            {$sort: { _id: -1 }},
            // {$sort: { created: -1}},
            {$limit: 10}
        ]);
        res.send({
            data: result
        })
    }


    // About: "WNS (Holdings) Limited (NYSE: WNS), is a leading Business Process Management (BPM) company. We combine our deep industry knowledge with technology and analytics expertise to co-create innovative, digital-led transformational solutions with clients across 10 industries. We enable businesses in Travel, Insurance, Banking and Financial Services, Manufacturing, Retail and Consumer Packaged Goods, Shipping and Logistics, Healthcare, and Utilities to re-imagine their digital future and transform their outcomes with operational excellence.↵We deliver an entire spectrum of BPM services in finance and accounting, procurement, customer interaction services and human resources leveraging collaborative models that are tailored to address the unique business challenges of each client. We co-create and execute the future vision of 350+ clients with the help of our 41,000+ employees. Our global footprint spans 16 countries with 60 delivery centers worldwide including in China, Costa Rica, India, the Philippines, Poland, Romania, South Africa, Spain, Sri Lanka, Turkey, United Kingdom and the United States."
    // Age: 24
    // CompanyId: 2237
    // CompanyReviewsLive: 2945
    // CompanySalaries: 20404
    // CompanyType: "Private"
    // HQCountry: "India"
    // HQUrlName: "mumbai"
    // InterviewExperiencesLive: 21
    // Logo: "wns-global-services"
    // Name: "WNS"
    // Rating: 3.69
    // ShortName: "WNS"
    // TotalEmployees: "10000+"
    // UrlName: "wns"
    // first_location: ["Mumbai", "Chennai"]
    // headquaters: "Mumbai"
    // industries: [{UrlName: "bpo-or-kpo", Id: "10", Name: "BPO/KPO"}]
    // 0: {UrlName: "bpo-or-kpo", Id: "10", Name: "BPO/KPO"}
    // industry_string: "BPO/KPO"
    // // location_count: 15
    // tags: [{Name: "MNC", UrlName: "mnc"}]


}



