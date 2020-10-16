import coursesController from '../controllers/courses.controller'

export default (router)=>{
    
    router.get('/list-courses', coursesController.listOfAllCourses);

    router.get('/filters-list', coursesController.listOfCategoriesAndSubcategories);

    router.get('/courses/:course_id', coursesController.Course);

    router.get('/search-title', coursesController.seachCoursesTitle)

    router.get('/', coursesController.index)

    router.get('/courses', coursesController.index)


    return router;
}
