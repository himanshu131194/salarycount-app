
import mongoose from 'mongoose'
import Tags from '../models/courses/tags'
import Courses from '../models/courses/courses'
import Authors from '../models/courses/authors'
import Caterogies from '../models/courses/categories'
import subCaterogies from '../models/courses/sub_categories'
import Videos from '../models/courses/videos'
import CoursesLive from '../models/courses/courses_live'

import rootTemplate from '../views/index'
import errorTemplate from '../views/error-404.js'
import courseTemplate from '../views/course.js'
import footerTemplate from '../views/footer.js'
import headerTemplate from '../views/header.js'



export default {
    index: async (req, res)=>{
        console.log(req.query);
        const { page=1, category=null } = req.query;
        
        let categories = await Caterogies.aggregate([
            { $match: { }},
            { $project: { name: 1, count: 1, url: 1 }}
        ])
        .cache({ key: 'allcategories'});

        let [{count: totalCount}={count: 1290}] = categories.filter((e)=> e.url===category),
            lastCount = totalCount%6 == 0 ? totalCount/6 : +(Math.floor(totalCount/6))+1
       

        let url = '/courses?page='+page, 
            nextURL = '/courses?page='+(+page+1),
            lastURL = '/courses?page='+(lastCount),
            prevURL = '/courses?page='+(+page-1)

        if(category){
            url += '&category='+category;
            lastURL += '&category='+category;
            nextURL += '&category='+category;
            prevURL += '&category='+category;
        }
        const FOOTER = footerTemplate(),
              HEADER = headerTemplate(),
              PAGINATION = { 
                  CURRENT : +page,
                  NEXT : +page+1,      
                  LAST: lastCount,            
                  CURRENT_URL : url,
                  NEXT_URL : nextURL,
                  LAST_URL: lastURL,
                  PREV_URL : prevURL
              };
        res.send(rootTemplate(categories, HEADER, FOOTER, PAGINATION));
    },

    listOfAllCourses: async (req, res)=>{
        console.log(req.query);
        const { offset:skip=0, limit=6, filters={}, category='' } = req.query;
        let filterObj = {}, sort = { total_videos_count: -1 };

        if(filters.sort){
           sort = filters.sort;
        }

        if(category!==''){
            let res = await CoursesLive.findOne({ url: category });
            filterObj.category = res._id;
        }

        try {
           const listCourses = await CoursesLive.aggregate([
               { $match : filterObj },
               {
                   $lookup: {
                       from: 'authors',
                       localField: 'authors',
                       foreignField: '_id',
                       as: 'authors'
                    }
                },
                { $sort: {created : -1}},
                { $skip: +skip },
                { $limit: +limit }
           ]);
           res.send({
               data: listCourses
            //    count : totalProfiles
           })
        } catch (error) {
            res.send({
                error
            })
        }
    },
    
    listOfCategoriesAndSubcategories: async (req, res)=>{
        let { filters={} } = req.query;
        (typeof filters === 'string') && (filters = JSON.parse(filters))
        let filterObj = {};

        if(filters['condition']){
            console.log("filters")
            filters.condition.id && (filterObj._id = mongoose.Types.ObjectId(filters.condition.id) )
        }

        console.log(filterObj);
        try {
            //CATEGORIES 
            let categories = await Caterogies.aggregate([
                { $match: { }},
                { $project: { name: 1, count: 1 }}
            ]);
            //SUBCATEGORIES
            let [{ subCategories }] = await Caterogies.aggregate([
                { $match : filterObj },
                {
                     $lookup: {
                         from: 'sub_categories',
                         localField: 'subCategory',
                         foreignField: '_id',
                         as: 'subCategories'
                     }
                 },
                 {$project: { subCategories: 1 }}
            ]);
            console.log(categories);
            res.send({
                data: { categories, subCategories}
             //    count : totalProfiles
            })
        } catch (error) {
            console.log(error)
            res.send({
                error
            });
        }
    },

    Course: async (req, res)=>{
        const FOOTER = footerTemplate(),
              HEADER = headerTemplate();
        //GET COURSE URL 
        const { course_id } = req.params;
        console.log(course_id);
        const [course] = await CoursesLive.aggregate([
            { $match : { courseUrl: `/${course_id}` } },
            {
                 $lookup: {
                     from: 'videos',
                     localField: 'lessons',
                     foreignField: '_id',
                     as: 'lessons'
                 }
             },
             { $unwind: "$lessons" },
             {
                 $project:{
                     title: 1,
                     summary: 1,
                     rating: 1,
                     keyPoints: 1,
                     lessons: 1,
                     description: 1,
                     poster: 1,
                     s3Url: 1,
                     totalHours: 1,
                     totalLessons: 1,
                     previewURL: 1
                 }
             }
        ]);
        console.log(course.lessons.videos.chapter_2.lessons);
        res.send(courseTemplate(course, HEADER, FOOTER));
    },

    seachCoursesTitle: async (req, res)=>{
        const { title='' } = req.query;   
        if(title == ''){
            return res.send({
                data : []
            })
        }
        let filterObj = {};
        filterObj = { title : {$regex: "^.*" + title.toLowerCase() + ".*", $options: 'i'} };

        console.log(filterObj);

        try {
            const titles = await Courses.aggregate([
                { $match : filterObj },
                {
                    $project:{
                        title: 1
                        // course: 1
                    }
                }
            ]);
            return res.send({
                data : titles
            });
        } catch (error) {
            res.send({
                error
            })
        }
    }
}



