(function(){
    let suggestCourse = (e)=>{
        if(e.target.value=='' || e.target.value.length==1){
           document.getElementById('suggested_courses').innerHTML = '';
           return;
        }
        document.getElementById('suggested_courses').innerHTML = '';
        let appendSeachedTitles = (titles)=>{
            titles.forEach((list)=>{
                let a = document.createElement('a');
                    a.className = "nav-link pb-0 pt-2";
                    a.href = "#";
                    list.title = list.title.replace(e.target.value, `<span class="text-dark font-weight-bold">${e.target.value}</span>`)
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
        //LODA COURSES
        let pagination = 1, category = '', url='/list-courses';
        if(window.location.href.match(/.*\/courses\?page=[\d]+$/ig)){
            pagination = parseInt(window.location.search.split("=")[1]);
            url += "?limit=6&offset="+((pagination-1)*6);
        }
        if(window.location.href.match(/.*\/courses\?page=[\d]+&category=[\w-&]+$/ig)){
            let params = window.location.search.split("&");
                pagination = parseInt(params[0].split("=")[1]);
                category = (params[1].split("=")[1]).trim();
                url += "?limit=6&offset="+((pagination-1)*6)+"&category="+category;
        }
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
            let list = document.getElementsByClassName('course-blocks'),
                listCount = document.getElementsByClassName('course-blocks').length;

            for(let block=0; block<listCount; block++){
                if(!data[block]){
                    var select = document.getElementById('list_course').childNodes;
                    select.removeChild(select.lastChild);
                    continue;
                }
                list[block].href = data[block].src;
                list[block].getElementsByClassName('course-title')[0].innerHTML = data[block].title;
                list[block].getElementsByClassName('course-thumb')[0].src = data[block].poster.thumb.url;
                list[block].getElementsByClassName('course-teaser')[0].innerHTML = data[block].summary;
                list[block].getElementsByClassName('total-lessons')[0].innerHTML = '<i class="fa fa-book-reader mr-1"></i> '+data[block].totalLessons+ ' lessons';
                list[block].getElementsByClassName('total-time')[0].innerHTML = '<i class="fa fa-clock mr-1"></i> '+getVideoDuration(data[block].totalHours);
                list[block].getElementsByClassName('course-thumb')[0].parentNode.classList.remove('cbp-lazyload');
            }
        }
        fetch(url)
            .then((res)=>{
                return res.json()
            })
            .then(({data})=>{
                console.log(data);
                updateList(data);
            })   
        //END LOAD COURSES

    }




})();