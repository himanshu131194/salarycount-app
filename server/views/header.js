export default ()=>{
    return(`
        <header class="header left-aligned-navbar space-top-1">
            <div class="header-section">
                <div class="container mt-lg-n2">
                    <nav class="js-mega-menu navbar navbar-expand-lg hs-menu-initialized hs-menu-horizontal">
                        <div class="navbar-nav-wrap">
                            <a class="navbar-brand navbar-nav-wrap-brand" href="/" aria-label="Front"><img src="https://salarycount.s3.ap-south-1.amazonaws.com/assets/logo/logo.png" alt="Logo"></a>
                            <div class="navbar-nav-wrap-navbar navbar-collapse collapse">
                                <ul class="navbar-nav">
                                    <li class="d-none d-lg-inline-block flex-grow-1 mx-2">
                                        <form class="input-group input-group-sm input-group-merge w-75">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text"><i class="fa fa-search"></i></div>
                                            </div>
                                            <input type="text" class="form-control" placeholder="What do you want to learn?" aria-label="What do you want to learn?" id="global_course_search">
                                            <div class="position-absolute nav card d-block pb-2 pl-4 pr-4 mt-7 pre-scrollable list-suggested-profiles" id="suggested_courses">
                                            </div>
                                        </form>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    `)
}