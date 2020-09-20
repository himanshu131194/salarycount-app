import postsController from '../controllers/posts.controller'

export default (router)=>{

    // router.get('/websites-categories', postsController.listOfAllWebsitesAndCategrories);

    // router.get('/categories-by-websites', postsController.listOfAllCategoriesFilteredByWebsites)

    // router.get('/videos-by-profile', postsController.listOfVideosByModels);

    // router.get('/profile-data', postsController.listOfProfileData);

    // router.post('/list-profiles', postsController.listOfProfiles);

    router.get('/fetch-filters', postsController.fetchCompaniesMetainfo);

    router.get('/list-companies', postsController.listAllCompanies)

    return router;
}