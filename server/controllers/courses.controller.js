
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
        const { filters={} } = req.query;
        console.log(filters)
        let filterObj = {};

        if(filters.condition){
            console.log("filters")
            filters.condition.id && (filterObj._id = mongoose.Types.ObjectId(filters.condition.id) )
        }

        console.log(filterObj);
        try {
            //CATEGORIES 
            let categories = await Caterogies.find({});
            //SUBCATEGORIES
            let subCategories = await Caterogies.aggregate([
                { $match : filterObj },
                {
                     $lookup: {
                         from: 'sub_categories',
                         localField: 'subCategory',
                         foreignField: '_id',
                         as: 'subCategoies'
                     }
                 },
            ]);
            console.log(subCategories);
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



