import coursesController from '../controllers/courses.controller'

export default (router)=>{
    
    router.get('/list-courses', coursesController.listOfAllCourses);

    router.get('/filters-list', coursesController.listOfCategoriesAndSubcategories)

    return router;
}
