
import Tags from '../models/courses/tags'
import Courses from '../models/courses/courses'
import Authors from '../models/courses/authors'
import Caterogies from '../models/courses/categories'
import subCaterogies from '../models/courses/sub_categories'
import Videos from '../models/courses/videos'

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
               { $match : {isCost: true} },
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
        try {
            //CATEGORIES 
            let categories = await Caterogies.find({});
            //SUBCATEGORIES
            let subCategories = await subCaterogies.find({});
            res.send({
                data: { categories, subCategories}
             //    count : totalProfiles
            })
        } catch (error) {
            res.send({
                error
            })
        }
    }
}



