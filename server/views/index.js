export default (list, HEADER, FOOTER)=>{
    let listCourses = ()=>{
        let displayString = '', count=6;
        while(count>0){
            displayString += 
            `<a class="d-block border-bottom pb-5 mb-5 course-blocks" href="course-description.html">
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
                                <h3 class="text-hover-primary course-title text-uppercase">Complete Python Bootcamp: Go from zero to hero in Python 3</h3> 
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
                <div class="container space-2 space-bottom-lg-3" data-select2-id="29">
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
                                        <h2 class="h4"><a class="text-inherit" href="#">Artificial Intelligence</a></h2>
                                        <!-- Nav Link --><a class="dropdown-item d-flex justify-content-between align-items-center px-0" href="#">
                        AI Product Manager
                        <span class="badge bg-soft-secondary badge-pill">30+</span>
                        </a> <a class="dropdown-item d-flex justify-content-between align-items-center px-0" href="#">
                        AI Programming with Python
                        </a> <a class="dropdown-item d-flex justify-content-between align-items-center px-0" href="#">
                        Computer Vision
                        <span class="badge badge-success badge-pill ml-1">New</span>
                        </a> <a class="dropdown-item d-flex justify-content-between align-items-center px-0" href="#">
                        Deep Learning
                        </a> <a class="dropdown-item d-flex justify-content-between align-items-center px-0" href="#">
                        Deep Reinforcement Learning
                        <span class="badge bg-soft-secondary badge-pill">18</span>
                        </a>
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
                                    <div class="mt-5">
                                        <h3 class="h4"><a class="text-inherit" href="#">Business</a></h3>
                                        <!-- Nav Link --><a class="dropdown-item d-flex justify-content-between align-items-center px-0" href="#">
                        Business Analytics
                        </a> <a class="dropdown-item d-flex justify-content-between align-items-center px-0" href="#">
                        Digital Marketing
                        </a> <a class="dropdown-item d-flex justify-content-between align-items-center px-0" href="#">
                        Marketing Analytics
                        </a>
                                        <!-- End Nav Link -->
                                        <!-- View More - Collapse -->
                                        <div class="collapse" id="collapseSectionThree"> <a class="nav-link" href="#">
                            Predictive Analytics for Business
                        </a> </div>
                                        <!-- End View More - Collapse -->
                                        <!-- Link -->
                                        <a class="link link-collapse small font-size-1 font-weight-bold pt-1" data-toggle="collapse" href="#collapseSectionThree" role="button" aria-expanded="false" aria-controls="collapseSectionThree"> <span class="link-collapse-default">View more</span> <span class="link-collapse-active">View less</span> <span class="link-icon ml-1">+</span> </a>
                                        <!-- End Link -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-9" data-select2-id="27">
                            <!-- Filter -->
                            <div class="border-bottom pb-3 mb-5" data-select2-id="26">
                                <div class="row justify-content-md-start align-items-md-center">
                                    <div class="col-md-4 mb-3 mb-md-0">
                                        <p class="font-size-1 mr-md-auto mb-0"><span class="text-dark font-weight-bold">195 courses</span> to get started</p>
                                    </div>
                                    <div class="col-md-8 text-md-right">
                                        <!-- Select -->
                                        <select class="js-custom-select"
                                            data-hs-select2-options='{
                                                "minimumResultsForSearch": "Infinity",
                                                "customClass": "btn btn-sm btn-white dropdown-toggle mb-1",
                                                "placeholder": "Skills",
                                                "dropdownAutoWidth": true,
                                                "width": "auto"
                                              }'>
                                            <option label="empty"></option>
                                            <option value="1" selected>Beginner</option>
                                            <option value="2">Intermediate</option>
                                            <option value="3">Advanced</option>
                                        </select>
                                        <!-- End Select -->
                                        <!-- Select -->
                                        <select class="js-custom-select"
                                            data-hs-select2-options='{
                                                "minimumResultsForSearch": "Infinity",
                                                "customClass": "btn btn-sm btn-white dropdown-toggle mb-1",
                                                "placeholder": "Skills",
                                                "dropdownAutoWidth": true,
                                                "width": "auto"
                                            }'>
                                            <option label="empty"></option>
                                            <option value="1" selected>Highest rated</option>
                                            <option value="2">Newest</option>
                                            <option value="3">Lowest price</option>
                                        </select>
                                        <!-- End Select -->
                                        <!-- Select -->
                                        
                                        <!-- End Select -->
                                        <!-- Select -->
                                        
                                        <!-- End Select -->
                                    </div>
                                </div>
                            </div>
                            <!-- End Filter -->
                            <!-- Card -->
                            ${listCourses()}
                            <!-- End Card -->
                            <!-- Card -->
                            <!-- End Card -->
                            <!-- Card -->
                            <!-- End Card -->
                            <!-- Pagination -->
                            <div class="d-flex justify-content-between align-items-center mt-8"> <small class="d-none d-sm-inline-block text-body">Page 1 out of 6</small>
                                <nav aria-label="Page navigation">
                                    <ul class="pagination mb-0">
                                        <li class="page-item ml-0">
                                            <a class="page-link" href="#" aria-label="Previous"> <span aria-hidden="true">«</span> <span class="sr-only">Previous</span> </a>
                                        </li>
                                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item disabled"><a class="page-link" href="#">...</a></li>
                                        <li class="page-item"><a class="page-link" href="#">6</a></li>
                                        <li class="page-item">
                                            <a class="page-link" href="#" aria-label="Next"> <span aria-hidden="true">»</span> <span class="sr-only">Next</span> </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <!-- End Pagination -->
                        </div>
                    </div>
                </div>
                <!-- End Courses Section -->
                <!-- CTA Section -->
                <div class="container space-bottom-lg-1">
                    <div class="text-center py-6" style="background: url(https://gostreamlabs.com/front/assets/svg/components/abstract-shapes-19.svg) center no-repeat;">
                        <h2>Find the right learning path for you</h2>
                        <p>Answer a few questions and match your goals to our programs.</p> <span class="d-block mt-5">
                <a class="btn btn-primary transition-3d-hover" href="#">Explore by Category</a>
                </span> </div>
                </div>
                <!-- End CTA Section -->
            </main>
            <!-- ========== END MAIN CONTENT ========== -->
            <!-- ========== FOOTER ========== -->
            <footer class="bg-light">
                <div class="container">
                    <div class="space-top-2 space-bottom-1 space-bottom-lg-2">
                        <div class="row justify-content-lg-between">
                            <div class="col-lg-3 ml-lg-auto mb-5 mb-lg-0">
                                <!-- Logo -->
                                <div class="mb-4">
                                    <a href="index.html" aria-label="Front"> <img class="brand" src="https://gostreamlabs.com/front/assets/svg/logos/logo.svg" alt="Logo"> </a>
                                </div>
                                <!-- End Logo -->
                                <!-- Nav Link -->
                                <ul class="nav nav-sm nav-x-0 flex-column">
                                    <li class="nav-item">
                                        <a class="nav-link media" href="javascript:;"> <span class="media">
                            <span class="fas fa-location-arrow mt-1 mr-2"></span> <span class="media-body">
                            153 Williamson Plaza, Maggieberg
                            </span> </span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link media" href="tel:1-062-109-9222"> <span class="media">
                            <span class="fas fa-phone-alt mt-1 mr-2"></span> <span class="media-body">
                            +1 (062) 109-9222
                            </span> </span>
                                        </a>
                                    </li>
                                </ul>
                                <!-- End Nav Link -->
                            </div>
                            <div class="col-6 col-md-3 col-lg mb-5 mb-lg-0">
                                <h5>Company</h5>
                                <!-- Nav Link -->
                                <ul class="nav nav-sm nav-x-0 flex-column">
                                    <li class="nav-item"><a class="nav-link" href="../pages/about-agency.html">About</a></li>
                                    <li class="nav-item"><a class="nav-link" href="../pages/careers.html">Careers <span class="badge badge-primary ml-1">We're hiring</span></a></li>
                                    <li class="nav-item"><a class="nav-link" href="../blog/newsroom.html">Blog</a></li>
                                    <li class="nav-item"><a class="nav-link" href="../pages/customers.html">Customers</a></li>
                                    <li class="nav-item"><a class="nav-link" href="../pages/hire-us.html">Hire us</a></li>
                                </ul>
                                <!-- End Nav Link -->
                            </div>
                            <div class="col-6 col-md-3 col-lg mb-5 mb-lg-0">
                                <h5>Features</h5>
                                <!-- Nav Link -->
                                <ul class="nav nav-sm nav-x-0 flex-column">
                                    <li class="nav-item"><a class="nav-link" href="#">Press</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#">Release notes</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#">Integrations</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#">Pricing</a></li>
                                </ul>
                                <!-- End Nav Link -->
                            </div>
                            <div class="col-6 col-md-3 col-lg">
                                <h5>Documentation</h5>
                                <!-- Nav Link -->
                                <ul class="nav nav-sm nav-x-0 flex-column">
                                    <li class="nav-item"><a class="nav-link" href="mailto:example@gmail.com">Support</a></li>
                                    <li class="nav-item"><a class="nav-link" href="https://gostreamlabs.com/front/documentation/index.html">Docs</a></li>
                                    <li class="nav-item"><a class="nav-link" href="../pages/status.html">Status</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#">API Reference</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#">Tech Requirements</a></li>
                                </ul>
                                <!-- End Nav Link -->
                            </div>
                            <div class="col-6 col-md-3 col-lg">
                                <h5>Resources</h5>
                                <!-- Nav Link -->
                                <ul class="nav nav-sm nav-x-0 flex-column">
                                    <li class="nav-item">
                                        <a class="nav-link" href="#"> <span class="media align-items-center">
                            <i class="fa fa-info-circle mr-2"></i>
                            <span class="media-body">Help</span> </span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#"> <span class="media align-items-center">
                            <i class="fa fa-user-circle mr-2"></i>
                            <span class="media-body">Your Account</span> </span>
                                        </a>
                                    </li>
                                </ul>
                                <!-- End Nav Link -->
                            </div>
                        </div>
                    </div>
                    <hr class="my-0">
                    <div class="space-1">
                        <div class="row align-items-md-center mb-7">
                            <div class="col-md-6 mb-4 mb-md-0">
                                <!-- Nav Link -->
                                <ul class="nav nav-sm nav-x-0 align-items-center">
                                    <li class="nav-item"> <a class="nav-link" href="../pages/privacy.html">Privacy &amp; Policy</a> </li>
                                    <li class="nav-item opacity mx-3">/</li>
                                    <li class="nav-item"> <a class="nav-link" href="../pages/terms.html">Terms</a> </li>
                                    <li class="nav-item opacity mx-3">/</li>
                                    <li class="nav-item"> <a class="nav-link" href="#">Site Map</a> </li>
                                </ul>
                                <!-- End Nav Link -->
                            </div>
                            <div class="col-md-6 text-md-right">
                                <ul class="list-inline mb-0">
                                    <!-- Social Networks -->
                                    <li class="list-inline-item">
                                        <a class="btn btn-xs btn-icon btn-soft-secondary" href="#"> <i class="fab fa-facebook-f"></i> </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="btn btn-xs btn-icon btn-soft-secondary" href="#"> <i class="fab fa-google"></i> </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="btn btn-xs btn-icon btn-soft-secondary" href="#"> <i class="fab fa-twitter"></i> </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="btn btn-xs btn-icon btn-soft-secondary" href="#"> <i class="fab fa-github"></i> </a>
                                    </li>
                                    <!-- End Social Networks -->
                                    <!-- Language -->
                                    <li class="list-inline-item">
                                        <div class="hs-unfold">
                                            <a class="js-hs-unfold-invoker dropdown-toggle btn btn-xs btn-soft-secondary" href="javascript:;" data-hs-unfold-options="{
                            &quot;target&quot;: &quot;#footerLanguage&quot;,
                            &quot;type&quot;: &quot;css-animation&quot;,
                            &quot;animationIn&quot;: &quot;slideInDown&quot;
                            }" data-hs-unfold-target="#footerLanguage" data-hs-unfold-invoker=""> <img class="dropdown-item-icon" src="https://gostreamlabs.com/front/assets/vendor/flag-icon-css/flags/4x3/us.svg" alt="United States Flag"> <span>United States</span> </a>
                                            <div id="footerLanguage" class="hs-unfold-content dropdown-menu dropdown-unfold dropdown-menu-bottom mb-2 hs-unfold-hidden hs-unfold-content-initialized hs-unfold-css-animation animated hs-unfold-reverse-y" data-hs-target-height="372" data-hs-unfold-content="" data-hs-unfold-content-animation-in="slideInDown" data-hs-unfold-content-animation-out="fadeOut" style="animation-duration: 300ms;"> <a class="dropdown-item active" href="#">English</a> <a class="dropdown-item" href="#">Deutsch</a> <a class="dropdown-item" href="#">Español</a> <a class="dropdown-item" href="#">Français</a> <a class="dropdown-item" href="#">Italiano</a> <a class="dropdown-item" href="#">日本語</a> <a class="dropdown-item" href="#">한국어</a> <a class="dropdown-item" href="#">Nederlands</a> <a class="dropdown-item" href="#">Português</a> <a class="dropdown-item" href="#">Русский</a> </div>
                                        </div>
                                    </li>
                                    <!-- End Language -->
                                </ul>
                            </div>
                        </div>
                        <!-- Copyright -->
                        <div class="w-md-75 text-lg-center mx-lg-auto">
                            <p class="text-muted small">© Front. 2020 Htmlstream. All rights reserved.</p>
                            <p class="text-muted small">When you visit or interact with our sites, services or tools, we or our authorised service providers may use cookies for storing information to help provide you with a better, faster and safer experience and for marketing purposes.</p>
                        </div>
                        <!-- End Copyright -->
                    </div>
                </div>
            </footer>
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