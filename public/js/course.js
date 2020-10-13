(function(){
    document.getElementById("global_course_search").onkeyup = (e)=>{
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
                console.log(data)
                appendSeachedTitles(data)
        })
    }
    window.onclick = (e)=>{
        if(e.target!==document.getElementById('suggested_courses')){
            document.getElementById('suggested_courses').innerHTML = "";
        }
    }
})();