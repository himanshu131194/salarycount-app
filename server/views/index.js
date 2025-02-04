export default (listCategories, HEADER, FOOTER, PAGINATION)=>{
    let setupPagination = (isbottom=null)=>{
        let prev = `<li class="page-item ml-0">
                        <a class="page-link" href=${PAGINATION.PREV_URL} aria-label="Previous"> <span aria-hidden="true">«</span> <span class="sr-only">Previous</span> </a>
                    </li>`;
        let next = `<li class="page-item">
                        <a class="page-link" href=${PAGINATION.NEXT_URL} aria-label="Next"> <span aria-hidden="true">»</span> <span class="sr-only">Next</span> </a>
                    </li>`;
        let boxClass =  isbottom ? `d-flex justify-content-between align-items-center mt-3`: `d-flex justify-content-end align-items-center`;
        return(
            `<div class="${boxClass}"> 
                ${isbottom ? `<small class="d-none d-sm-inline-block text-body">Page ${PAGINATION.CURRENT} out of ${PAGINATION.LAST}</small>` : ''}
                <nav aria-label="Page navigation">
                    <ul class="pagination mb-0">
                        ${PAGINATION.CURRENT>1? prev: ''}
                        <li class="page-item active"><a class="page-link" href=${PAGINATION.CURRENT_URL}>${PAGINATION.CURRENT}</a></li>
                        <li class="page-item"><a class="page-link" href=${PAGINATION.NEXT_URL}>${PAGINATION.NEXT}</a></li>
                        <li class="page-item disabled"><a class="page-link" href="#">...</a></li>
                        <li class="page-item"><a class="page-link" href=${PAGINATION.LAST_URL}>${PAGINATION.LAST}</a></li>
                        ${PAGINATION.CURRENT!==PAGINATION.LAST? next: ''}
                    </ul>
                </nav>
            </div>`
        )
    }
    let listCourseFilters = ()=>{
        let displayString = '';
        listCategories.forEach((list)=>{
            // let categoryURL = list.name.replace(/ /g, '-');
            displayString += 
            `<a class="dropdown-item d-flex justify-content-between align-items-center px-0 text-capitalize" href="/courses?page=1&category=${list.url}">
                ${list.name}
                <span class="badge bg-soft-secondary badge-pill">${list.count}</span>
            </a>`;
        })
        return displayString;
    }
    let listCourses = ()=>{
        let displayString = '', count=6;
        while(count>0){
            displayString += 
            `<a class="d-block border-bottom pb-3 mb-3 course-blocks" href="course-description.html">
                <div class="row mx-md-n2">
                    <div class="col-md-4 px-md-2 mb-3 mb-md-0">
                        <div class="position-relative fix-loading-box cbp-lazyload"> 
                            <img class="img-fluid w-100 rounded course-thumb" data-cbp-src="https://gostreamlabs.com/front/assets/svg/components/graphics-1.svg" alt="Image Description">
                            <div class="position-absolute bottom-0 left-0 mb-3 ml-4">
                                <div class="d-flex align-items-center flex-wrap">
                                    <ul class="list-inline mt-n1 mb-0 mr-2">
                                        <li class="list-inline-item mx-0"><img src="https://gostreamlabs.com/front/assets/svg/illustrations/star.svg" alt="Review rating" width="14"></li>
                                        <li class="list-inline-item mx-0"><img src="https://gostreamlabs.com/front/assets/svg/illustrations/star.svg" alt="Review rating" width="14"></li>
                                        <li class="list-inline-item mx-0"><img src="https://gostreamlabs.com/front/assets/svg/illustrations/star.svg" alt="Review rating" width="14"></li>
                                        <li class="list-inline-item mx-0"><img src="https://gostreamlabs.com/front/assets/svg/illustrations/star.svg" alt="Review rating" width="14"></li>
                                        <li class="list-inline-item mx-0"><img src="https://gostreamlabs.com/front/assets/svg/illustrations/star.svg" alt="Review rating" width="14"></li>
                                    </ul> 
                                    <span class="d-inline-block">
                                        <small class="font-weight-bold text-white mr-1"></small>
                                        <small class="text-white-70"></small>
                                    </span> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="media mb-2">
                            <div class="media-body">
                                <h3 class="text-hover-primary course-title text-uppercase"></h3> 
                            </div>
                        </div>
                        <div class="d-flex justify-content-start align-items-center small text-muted mb-2">
                            <div class="total-lessons"> 
                                <i class="fa fa-book-reader mr-1"></i> 0 lessons 
                            </div> 
                            <span class="text-muted mx-2">|</span>
                            <div class="d-inline-block total-time"> 
                                <i class="fa fa-clock mr-1"></i>  0h 0m 
                            </div> 
                            <span class="text-muted mx-2">|</span>
                            <div class="d-inline-block"> 
                                <i class="fa fa-signal mr-1"></i> All levels 
                            </div>
                        </div>
                        <p class="font-size-1 text-body mb-0 course-teaser"></p>
                        
                    </div>
                </div>
            </a>`
            --count;
        }
        return displayString;
    }
    return(
        `<!DOCTYPE html>
        <html lang="en" data-select2-id="31">
        <head>
            <!-- Title -->
            <title>Course - Courses Listing Page | Front - Responsive Website Template</title>
            <!-- Required Meta Tags Always Come First -->
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <!-- Favicon -->
            <link rel="shortcut icon" href="https://gostreamlabs.com/front/favicon.ico">
            <!-- Font -->
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600&amp;display=swap" rel="stylesheet">
            <!-- CSS Implementing Plugins -->
            <link rel="stylesheet" href="/css/all.css">
            <link rel="stylesheet" href="/css/hs-mega-menu.min.css">
            <link rel="stylesheet" href="/css/select2.min.css">
            <!-- CSS Front Template -->
            <link rel="stylesheet" href="/css/theme.css"> </head>

        <body data-select2-id="30">
            <!-- ========== HEADER ========== -->
            ${HEADER}
            <!-- ========== END HEADER ========== -->
            <main id="content" role="main" data-select2-id="content">
                <!-- Hero Section -->
                <!-- End Hero Section -->
                <!-- Courses Section -->
                <div class="container space-1 space-bottom-lg-3" data-select2-id="29">
                    <div class="row" data-select2-id="28">
                        <div class="col-lg-3 mb-5 mb-lg-0">
                            <div class="navbar-expand-lg navbar-expand-lg-collapse-block">
                                <!-- Responsive Toggle Button -->
                                <button type="button" class="navbar-toggler btn btn-block border py-3" aria-label="Toggle navigation" aria-expanded="false" aria-controls="sidebarNav" data-toggle="collapse" data-target="#sidebarNav"> <span class="d-flex justify-content-between align-items-center">
                        <span class="h5 mb-0">View all categories</span> <span class="navbar-toggler-default">
                        <svg width="14" height="14" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                            <path fill="currentColor" d="M17.4,6.2H0.6C0.3,6.2,0,5.9,0,5.5V4.1c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,5.9,17.7,6.2,17.4,6.2z M17.4,14.1H0.6c-0.3,0-0.6-0.3-0.6-0.7V12c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,13.7,17.7,14.1,17.4,14.1z"></path>
                        </svg>
                        </span> <span class="navbar-toggler-toggled">
                        <svg width="14" height="14" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                            <path fill="currentColor" d="M11.5,9.5l5-5c0.2-0.2,0.2-0.6-0.1-0.9l-1-1c-0.3-0.3-0.7-0.3-0.9-0.1l-5,5l-5-5C4.3,2.3,3.9,2.4,3.6,2.6l-1,1 C2.4,3.9,2.3,4.3,2.5,4.5l5,5l-5,5c-0.2,0.2-0.2,0.6,0.1,0.9l1,1c0.3,0.3,0.7,0.3,0.9,0.1l5-5l5,5c0.2,0.2,0.6,0.2,0.9-0.1l1-1 c0.3-0.3,0.3-0.7,0.1-0.9L11.5,9.5z"></path>
                        </svg>
                        </span> </span>
                                </button>
                                <!-- End Responsive Toggle Button -->
                        <div id="sidebarNav" class="collapse navbar-collapse">
                            <div class="mt-5 mt-lg-0">
                                <h2 class="h4"><a class="text-inherit" href="#">Categories</a></h2>
                                <!-- Nav Link -->
                                ${listCourseFilters()}
                                <!-- End Nav Link -->
                                <!-- View More - Collapse -->
                                <div class="collapse" id="collapseSectionOne"> <a class="dropdown-item d-flex justify-content-between align-items-center px-0" href="#">
                            Machine Learning
                        </a> <a class="dropdown-item d-flex justify-content-between align-items-center px-0" href="#">
                            Natural Language Processing
                        </a> </div>
                                        <!-- End View More - Collapse -->
                                        <!-- Link -->
                                        <a class="link link-collapse small font-size-1 font-weight-bold pt-1" data-toggle="collapse" href="#collapseSectionOne" role="button" aria-expanded="false" aria-controls="collapseSectionOne"> <span class="link-collapse-default">View more</span> <span class="link-collapse-active">View less</span> <span class="link-icon ml-1">+</span> </a>
                                        <!-- End Link -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-9" data-select2-id="27">
                            <!-- Filter -->
                            <div class="border-bottom pb-3 mb-3" data-select2-id="26">
                                <div class="row justify-content-md-between align-items-md-center">
                                    <div class="col-md-6">
                                        <!-- Select -->
                                        
                                        <!-- End Select -->
                                    </div>
                                    <div class="col-md-6 mb-3 mb-md-0">
                                        ${setupPagination()}
                                    </div>
                                </div>
                            </div>
                            <!-- End Filter -->
                            <!-- Card -->
                            <div id="list_course">${listCourses()}</div>
                            <!-- End Card -->
                            <!-- Pagination -->
                             ${setupPagination(true)}
                            <!-- End Pagination -->
                        </div>
                    </div>
                </div>
                <!-- End Courses Section -->
                <!-- CTA Section -->
                <!-- End CTA Section -->
            </main>
            <!-- ========== END MAIN CONTENT ========== -->
            <!-- ========== FOOTER ========== -->
            ${FOOTER}
            <!-- ========== END FOOTER ========== -->
            <!-- Go to Top -->
            <a class="js-go-to go-to position-fixed animated hs-go-to-prevent-event fadeOutDown" href="javascript:;" style="right: 15px; bottom: -15px;" data-hs-go-to-options="{
            &quot;offsetTop&quot;: 700,
            &quot;position&quot;: {
                &quot;init&quot;: {
                &quot;right&quot;: 15
                },
                &quot;show&quot;: {
                &quot;bottom&quot;: 15
                },
                &quot;hide&quot;: {
                &quot;bottom&quot;: -15
                }
            }
            }"> <i class="fas fa-angle-up"></i> </a>
            <!-- End Go to Top -->
            <!-- JS Global Compulsory -->
            <script src="/js/jquery.min.js"></script>
            <script src="/js/jquery-migrate.min.js"></script>
            <script src="/js/bootstrap.bundle.min.js"></script>
            <!-- JS Implementing Plugins -->
            <script src="/js/hs-header.min.js"></script>
            <script src="/js/hs-go-to.min.js"></script>
            <script src="/js/hs-unfold.min.js"></script>
            <script src="/js/hs-mega-menu.min.js"></script>
            <script src="/js/select2.full.min.js"></script>
            <!-- JS Front -->
            <script src="/js/hs.core.js"></script>
            <script src="/js/hs.select2.js"></script>
            <!-- JS Plugins Init. -->
            <script>
            $(document).on('ready', function() {
                // initialization of header
                var header = new HSHeader($('#header')).init();
                // initialization of mega menu
                var megaMenu = new HSMegaMenu($('.js-mega-menu')).init();
                // initialization of unfold
                var unfold = new HSUnfold('.js-hs-unfold-invoker').init();
                // initialization of select2
                $('.js-custom-select').each(function() {
                    var select2 = $.HSCore.components.HSSelect2.init($(this));
                });
                // initialization of go to
                $('.js-go-to').each(function() {
                    var goTo = new HSGoTo($(this)).init();
                });
            });
            </script>
            <script src="/js/course.js"></script>
            <!-- IE Support -->
            <script>
            if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) document.write('<script src="https://gostreamlabs.com/front/assets/vendor/polifills.js"><\/script>');
            </script>
            <div id="uvpn_rate_us" style="display: none;">
                <div class="uvpn_wrap">
                    <div class="uvpn_logo-ext">
                        <div class="uvpn_logo-wrap"> <img src="chrome-extension://jaoafpkngncfpfggjefnekilbkcpjdgp/img/128.png"> </div>
                    </div>
                    <div class="uvpn_title"> Don’t Forget to Rate Us </div>
                    <div class="uvpn_desc"> If you enjoy our product, give us 5 stars. It helps so much! </div>
                    <div class="stars">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1235" height="1175" viewBox="0 0 1235 1175">
                            <path fill="#cf6218" d="M0,449h1235l-999,726 382-1175 382,1175z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1235" height="1175" viewBox="0 0 1235 1175">
                            <path fill="#cf6218" d="M0,449h1235l-999,726 382-1175 382,1175z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1235" height="1175" viewBox="0 0 1235 1175">
                            <path fill="#cf6218" d="M0,449h1235l-999,726 382-1175 382,1175z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1235" height="1175" viewBox="0 0 1235 1175">
                            <path fill="#cf6218" d="M0,449h1235l-999,726 382-1175 382,1175z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1235" height="1175" viewBox="0 0 1235 1175">
                            <path fill="#cf6218" d="M0,449h1235l-999,726 382-1175 382,1175z"></path>
                        </svg>
                    </div> <a target="_blank" href="https://chrome.google.com/webstore/detail/uvpn-free-and-unlimited-v/jaoafpkngncfpfggjefnekilbkcpjdgp/reviews" id="rate_btn_rateus" class="uvpn_rate-btn uvpn_btn">                    Rate Us                </a>
                    <div id="close_btn_rateus" class="uvpn_later-btn uvpn_btn"> Not Now </div>
                </div>
            </div>
        </body>
        </html>`
    )
}