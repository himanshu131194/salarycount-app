export default (COURSE, FOOTER)=>{

    let displayRating = (count)=>{
        let displayString = '';
        if(count>0){
           while(count>0){
               displayString += `<li class="list-inline-item mx-0"><img src="/img/star.svg" alt="Review rating" width="16"></li>`;
               --count;
           }
        }
        return displayString;
    }

    let displayLearningPoints = (array)=>{
        let displayString = '', col = 6;
        (array.length==1) && (col=12)
        if(array.length>0){
            array.forEach(value => {
                displayString += `
                    <div class="col-lg-${col}">
                        <div class="media text-body font-size-1 mb-3"> 
                            <i class="fas fa-check-circle text-success mt-1 mr-2"></i>
                            <div class="media-body">${value}</div>
                        </div>
                    </div>`;
            });
        }
        return displayString;
    }

    let totalHours = (time)=>{
        let getFormat = (t)=>(t<10) ? `0`+t.toString() : t;
        time = parseInt(time);
        let h=0, m=0, s=0;
        if(time>3600){
            h = parseInt(time/3600); m = parseInt(time%3600);
            if(m>60){
                s = parseInt(m%60); m = parseInt(m/60);
            }else
                s = parseInt(m);
        }else{
            m = parseInt(time%60); s = m > 0 ? m : 0;
            m = parseInt(time/60);
        }
        return (h===0) ? `${getFormat(m)}:${getFormat(s)}`: `${getFormat(h)}:${getFormat(m)}:${getFormat(s)}`;
    }

    let courseContent = (lessons)=>{
        let lessonsContent = (chapters)=>{
            let displayString = '';
            for(let chapter of chapters){
                displayString += 
                    `<div class="border-bottom py-3 pr-3 pl-6">
                        <div class="row">
                            <div class="col-8"> 
                                <span class="media text-body font-size-1 mr-5">
                                    <i class="fa fa-play-circle min-w-3rem text-center opacity-lg mt-1 mr-2 ml-1"></i>
                                    <span class="media-body"><span>${chapter.title}</span> </span>
                                </span>
                            </div>
                            <div class="col-4 text-right">
                                <div class="row">
                                    <div class="col-lg-6"> </div>
                                    <div class="col-lg-6"> <span class="font-size-1">${chapter.total_time}</span> </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
            }
            return displayString;
        }
        console.log(lessons);
        let displayString = '', count=1;
        for(let section in lessons){
            displayString += `
            <div class="card border mb-1">
            <div class="card-header card-collapse" id="coursesHeadingThree_${count}">
                <a class="btn btn-link btn-sm btn-block card-btn p-3 collapsed" href="javascript:;" role="button" data-toggle="collapse" data-target="#coursesCollapseThree_${count}" aria-expanded="false" aria-controls="coursesCollapseThree_${count}">
                    <span class="row">
                        <span class="col-8">
                            <span class="media">
                                <span class="card-btn-toggle mr-3 ml-0">
                                    <span class="card-btn-toggle-default">+</span> 
                                    <span class="card-btn-toggle-active">−</span> 
                                </span> 
                                <span class="media-body">
                                    <span class="text-body font-weight-bold mr-5">${lessons[section].title}</span> 
                                </span>
                            </span>
                        </span> 
                        <span class="col-4 text-right">
                            <span class="row">
                                <span class="col-lg-6">
                                    <span class="text-muted">${lessons[section].total_lessons} lectures</span> 
                                </span> 
                                <span class="col-lg-6">
                                    <span class="text-muted">${lessons[section].total_time}</span> 
                                </span>
                            </span>
                        </span>
                    </span>
                </a>
            </div>
            <div id="coursesCollapseThree_${count}" class="collapse" aria-labelledby="coursesHeadingThree_${count}">
                <div class="card-body p-0">
                    ${lessonsContent(lessons[section].lessons)}
                </div>
            </div>
            </div>`
            ++count;
        }
        return displayString;
    }

    return(
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8">
            <title>Detail | Basik - Bootstrap 4 Web Application</title>
            <meta name="description" content="Responsive, Bootstrap, BS4">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <title>Course - Courses Listing Page | Front - Responsive Website Template</title>
            <!-- Font -->
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600&amp;display=swap" rel="stylesheet">
            <!-- CSS Implementing Plugins -->
            <link rel="stylesheet" href="/css/all.css">
            <link rel="stylesheet" href="https://gostreamlabs.com/front/assets/vendor/hs-mega-menu/dist/hs-mega-menu.min.css">
            <link rel="stylesheet" href="https://gostreamlabs.com/front/assets/vendor/fancybox/dist/jquery.fancybox.min.css">
            <!-- CSS Front Template -->
            <link rel="stylesheet" href="/css/theme.css"> 
        </head>
        
        <body class="layout-column">
            <div id="root">
                <header class="header left-aligned-navbar space-top-1">
                    <div class="header-section">
                        <div class="container mt-lg-n2">
                            <nav class="js-mega-menu navbar navbar-expand-lg hs-menu-initialized hs-menu-horizontal">
                                <div class="navbar-nav-wrap">
                                    <a class="navbar-brand navbar-nav-wrap-brand" href="/" aria-label="Front"><img src="https://salarycount.s3.ap-south-1.amazonaws.com/assets/logo/logo.png" alt="Logo"></a>
                                    <div class="navbar-nav-wrap-navbar navbar-collapse collapse">
                                        <ul class="navbar-nav">
                                            <li class="d-none d-lg-inline-block navbar-nav-item flex-grow-1 mx-2">
                                                <form class="input-group input-group-sm input-group-merge w-75">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text"><i class="fa fa-search"></i></div>
                                                    </div>
                                                    <input type="text" class="form-control" placeholder="What do you want to learn?" aria-label="What do you want to learn?">
                                                </form>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
                <main id="content" role="main">
                    <div class="position-relative">
                        <div class="gradient-y-overlay-lg-white bg-img-hero space-top-2 space-bottom-1" style="background-image: url(&quot;/img/img10.jpg&quot;);">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-7 col-lg-8">
                                        <h1 class="text-lh-sm">${COURSE.title}</h1>
                                        <p>${COURSE.summary}</p>
                                        <div class="d-flex align-items-center flex-wrap">
                                            <div class="d-flex align-items-center flex-wrap">
                                                <ul class="list-inline mt-n1 mb-0 mr-2">
                                                    ${displayRating(COURSE.rating)}
                                                </ul> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container space-top-md-2 position-md-absolute top-0 right-0 left-0">
                            <div class="row justify-content-end">
                                <div id="stickyBlockStartPoint" class="col-md-5 col-lg-4 position-relative z-index-2">
                                    <div class="js-sticky-block card border" data-hs-sticky-block-options="{ &quot;parentSelector&quot;: &quot;#stickyBlockStartPoint&quot;, &quot;breakpoint&quot;: &quot;md&quot;, &quot;startPoint&quot;: &quot;#stickyBlockStartPoint&quot;, &quot;endPoint&quot;: &quot;#stickyBlockEndPoint&quot;, &quot;stickyOffsetTop&quot;: 12, &quot;stickyOffsetBottom&quot;: 12 }">
                                        <div class="position-relative p-1">
                                            <a class="js-fancybox video-player" href="javascript:;" data-hs-fancybox-options="{ &quot;src&quot;: &quot;//salarycount.s3.ap-south-1.amazonaws.com/courses/content/introductions+/5f70396c394f53932a0b4dba.mp4&quot;, &quot;caption&quot;: &quot;Front - Responsive Website Template&quot;, &quot;speed&quot;: 700, &quot;buttons&quot;: [&quot;fullScreen&quot;, &quot;close&quot;], &quot;youtube&quot;: { &quot;autoplay&quot;: 1 } }"> 
                                             <img class="card-img-top" src=${COURSE.poster.thumb.url} alt="Image Description"> 
                                             <span class="video-player-btn video-player-centered text-center">
                                                <span class="video-player-icon mb-2">
                                                    <i class="fa fa-play"></i>
                                                </span> 
                                                <span class="d-block text-center text-white"></span> 
                                             </span>
                                            </a>
                                        </div>
                                        <div class="card-body">
                                            <div class="mb-2"> 
                                                <a class="btn btn-block btn-primary transition-3d-hover" href=${COURSE.s3Url} download>
                                                 DOWNLOAD BUNDLE <i class="fas fa-download ml-1"></i>
                                                </a> 
                                            </div>
                                        </div>
                                        <a class="card-footer text-center font-weight-bold py-3" data-toggle="modal" data-target="#copyToClipboardModal" href="javascript:;"> <i class="fa fa-share mr-1"></i> Share </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container space-top-2 space-top-md-1">
                        <div class="row">
                            <div class="col-md-7 col-lg-8">
                                <div class="pt-0 mt-0">
                                    <h3 class="mb-4">What you'll learn</h3>
                                    <div class="row">
                                        ${displayLearningPoints(COURSE.keyPoints)}
                                    </div>
                                </div>
                                <div class="border-top pt-7 mt-7">
                                    <div class="row mb-4">
                                        <div class="col-8">
                                            <h3 class="mb-0">Course content</h3> </div>
                                        <div class="col-4 text-right">
                                            <div class="row">
                                                <div class="col-lg-6"> <span class="font-size-1">${COURSE.totalLessons} lectures</span> </div>
                                                <div class="col-lg-6"> <span class="font-size-1">${totalHours(COURSE.totalHours)}</span> </div>
                                            </div>
                                        </div>
                                    </div>
                                    ${courseContent(COURSE.lessons.videos)}
                                    <div class="border-top pt-7 mt-7">
                                        <h3 class="mb-4">Description</h3>
                                        ${COURSE.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container space-bottom-2">
                        <div class="border-top pt-7 mt-7">
                            <h3 class="mb-4">Students also bought</h3>
                            <div class="row">
                                <article class="col-md-6 col-lg-4 mb-5">
                                    <div class="card border h-100">
                                        <div class="card-img-top position-relative"> <img class="card-img-top" src="https://gostreamlabs.com/front/assets/svg/components/graphics-1.svg" alt="Image Description">
                                            <div class="position-absolute top-0 left-0 mt-3 ml-3"> <small class="btn btn-xs btn-success btn-pill text-uppercase shadow-soft mb-3">Bestseller</small> </div>
                                            <div class="position-absolute bottom-0 left-0 mb-3 ml-4">
                                                <div class="d-flex align-items-center flex-wrap">
                                                    <ul class="list-inline mt-n1 mb-0 mr-2">
                                                        <li class="list-inline-item mx-0"><img src="https://gostreamlabs.com/front/assets/svg/illustrations/star.svg" alt="Review rating" width="14"></li>
                                                        <li class="list-inline-item mx-0"><img src="https://gostreamlabs.com/front/assets/svg/illustrations/star.svg" alt="Review rating" width="14"></li>
                                                        <li class="list-inline-item mx-0"><img src="https://gostreamlabs.com/front/assets/svg/illustrations/star.svg" alt="Review rating" width="14"></li>
                                                        <li class="list-inline-item mx-0"><img src="https://gostreamlabs.com/front/assets/svg/illustrations/star.svg" alt="Review rating" width="14"></li>
                                                        <li class="list-inline-item mx-0"><img src="https://gostreamlabs.com/front/assets/svg/illustrations/star.svg" alt="Review rating" width="14"></li>
                                                    </ul> <span class="d-inline-block"><small class="font-weight-bold text-white mr-1">4.91</small><small class="text-white-70">(1.5k+ reviews)</small></span> </div>
                                            </div>
                                        </div>
                                        <div class="card-body"> <span class="d-block small font-weight-bold text-cap mb-2">Code</span>
                                            <div class="mb-3">
                                                <h3><a class="text-inherit" href="course-description.html">this is it</a></h3> </div>
                                            <div class="d-flex align-items-center">
                                                <div class="avatar-group">
                                                    <a class="avatar avatar-xs avatar-circle" data-toggle="tooltip" data-placement="top" title="" href="#" data-original-title="Nataly Gaga"> <img class="avatar-img" src="https://gostreamlabs.com/front/assets/img/100x100/img1.jpg" alt="Image Description"> </a>
                                                </div>
                                                <div class="d-flex align-items-center ml-auto">
                                                    <div class="small text-muted"> <i class="fa fa-book-reader mr-1"></i> 10 lessons </div> <small class="text-muted mx-2">|</small>
                                                    <div class="small text-muted"> <i class="fa fa-clock mr-1"></i> 3h 25m </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-footer border-0 pt-0">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div class="mr-2"> <small class="d-block text-muted text-lh-sm"><del>$114.99</del></small> <span class="d-block h5 text-lh-sm mb-0">$99.99</span> </div> <a class="btn btn-sm btn-primary transition-3d-hover" href="course-description.html">Preview</a> </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </main>
                 ${FOOTER}
            </div>
            <script type="text/javascript" src="/dist/bundle.js"></script>
            <!-- JS Global Compulsory -->
            <script src="https://gostreamlabs.com/front/assets/vendor/jquery/dist/jquery.min.js"></script>
            <script src="https://gostreamlabs.com/front/assets/vendor/jquery-migrate/dist/jquery-migrate.min.js"></script>
            <script src="https://gostreamlabs.com/front/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
            <!-- JS Implementing Plugins -->
            <script src="https://gostreamlabs.com/front/assets/vendor/hs-header/dist/hs-header.min.js"></script>
            <script src="https://gostreamlabs.com/front/assets/vendor/hs-go-to/dist/hs-go-to.min.js"></script>
            <script src="https://gostreamlabs.com/front/assets/vendor/hs-unfold/dist/hs-unfold.min.js"></script>
            <script src="https://gostreamlabs.com/front/assets/vendor/hs-mega-menu/dist/hs-mega-menu.min.js"></script>
            <script src="https://gostreamlabs.com/front/assets/vendor/hs-sticky-block/dist/hs-sticky-block.min.js"></script>
            <script src="https://gostreamlabs.com/front/assets/vendor/fancybox/dist/jquery.fancybox.min.js"></script>
            <script src="https://gostreamlabs.com/front/assets/vendor/clipboard/dist/clipboard.min.js"></script>
            <!-- JS Front -->
            <script src="https://gostreamlabs.com/front/assets/js/hs.core.js"></script>
            <script src="https://gostreamlabs.com/front/assets/js/hs.fancybox.js"></script>
            <script src="https://gostreamlabs.com/front/assets/js/hs.clipboard.js"></script>
            <!-- JS Plugins Init. -->
            <script>
            $(document).on('ready', function() {
                // initialization of header
                var header = new HSHeader($('#header')).init();
                // initialization of mega menu
                var megaMenu = new HSMegaMenu($('.js-mega-menu')).init();
                // initialization of unfold
                var unfold = new HSUnfold('.js-hs-unfold-invoker').init();
                // initialization of fancybox
                $('.js-fancybox').each(function() {
                    var fancybox = $.HSCore.components.HSFancyBox.init($(this));
                });
                // initialization of sticky blocks
                $('.js-sticky-block').each(function() {
                    var stickyBlock = new HSStickyBlock($(this)).init();
                });
                // initialization of clipboard
                $('.js-clipboard').each(function() {
                    var clipboard = $.HSCore.components.HSClipboard.init(this);
                });
                // initialization of go to
                $('.js-go-to').each(function() {
                    var goTo = new HSGoTo($(this)).init();
                });
            });
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