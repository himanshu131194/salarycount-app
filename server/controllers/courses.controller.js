
import mongoose from 'mongoose'
import Tags from '../models/courses/tags'
import Courses from '../models/courses/courses'
import Authors from '../models/courses/authors'
import Caterogies from '../models/courses/categories'
import subCaterogies from '../models/courses/sub_categories'
import Videos from '../models/courses/videos'
import CoursesLive from '../models/courses/courses_live'

import errorTemplate from '../views/error-404.js'
import courseTemplate from '../views/course.js'

export default {
    listOfAllCourses: async (req, res)=>{
        const { offset:skip=0, limit=6, filters={} } = req.query;
        let filterObj = {}, sort = { total_videos_count: -1 };

        if(filters.sort){
           sort = filters.sort;
        }
        if(filters.condition){
           filterObj = { name : {$regex: "^" + filters.condition.searchKey.toLowerCase() + ".*"} };
        }

        try {
           const listCourses = await Courses.aggregate([
               { $match : {} },
               {
                    $lookup: {
                        from: 'authors',
                        localField: 'authors',
                        foreignField: '_id',
                        as: 'authors'
                    }
                },
               { $sort: {created : 1}},
               { $skip: +skip },
               { $limit: +limit },
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
                     totalLessons: 1
                 }
             }
        ]);
        console.log(course.lessons.videos.chapter_2.lessons);
        res.send(courseTemplate(course));
    }
}



