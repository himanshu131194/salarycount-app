(function(){
    let suggestCourse = (e)=>{
        if(e.target.value==''){
           document.getElementById('suggested_courses').innerHTML = '';
           return;
        }
        document.getElementById('suggested_courses').innerHTML = '';
        let appendSeachedTitles = (titles)=>{
            titles.forEach((list)=>{
                let a = document.createElement('a');
                    a.className = "nav-link pb-0 pt-2";
                    a.href = "#";
                    a.innerHTML = list.title;
                document.getElementById('suggested_courses').append(a);
            })
        }
        fetch('/search-title?title='+e.target.value)
            .then((res)=>{
                return res.json()
            })
            .then(({data})=>{
                appendSeachedTitles(data)
        })
    };
    document.getElementById("global_course_search").onkeyup = suggestCourse;
    document.getElementById("global_course_search").onfocus = suggestCourse;

    window.onclick = (e)=>{
        if(e.target!==document.getElementById('suggested_courses')){
            document.getElementById('suggested_courses').innerHTML = "";
        }
    }

    window.onload = ()=>{
        let pagination = 1;
        if(window.location.search.match('page') && window.location.search.split("=")[1]){
            pagination = parseInt(window.location.search.split("=")[1]);
        }
        let pagination = window.location.search.match('page');
        let getVideoDuration  = (time)=>{
            // let getFormat = (t)=>(t<10) ? `0`+t.toString() : t;
            let getFormat = (t)=>(t<10) ? ``+t.toString() : t;
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
            return (h===0) ? `${getFormat(m)}m`: `${getFormat(h)}h ${getFormat(m)}m`;
        }
        let updateList = (data)=>{
            let list = document.getElementsByClassName('course-blocks'), count = 0; 
            for(let block of list){
                block.getElementsByClassName('course-title')[0].innerHTML = data[count].title;
                block.getElementsByClassName('course-thumb')[0].src = data[count].poster.thumb.url;
                block.getElementsByClassName('course-teaser')[0].innerHTML = data[count].summary;
                block.getElementsByClassName('total-lessons')[0].innerHTML = '<i class="fa fa-book-reader mr-1"></i> '+data[count].totalLessons+ ' lessons';
                block.getElementsByClassName('total-time')[0].innerHTML = '<i class="fa fa-clock mr-1"></i> '+getVideoDuration(data[count].totalHours);


                
                block.getElementsByClassName('course-thumb')[0].parentNode.classList.remove('cbp-lazyload');

                // block.getElementsByClassName('course-teaser')[0].innerHTML = data[count].summary;
                ++count;
            }
        }
        fetch('/list-courses?limit=6&offset='+(pagination*6))
        .then((res)=>{
            return res.json()
        })
        .then(({data})=>{
            console.log(data);
            updateList(data);
        })   
    }




})();