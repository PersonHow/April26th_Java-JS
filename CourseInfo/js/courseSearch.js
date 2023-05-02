const searchbtn = document.querySelector("#searchbtn");
const searchInput = document.querySelector("#searchInput");

//文字區
const textul = document.querySelector("#textul");

let res = [];



function searchById(){
    let input = {
        "message":searchInput.value 
        }

    fetch("http://localhost:8080/course_Serech_ById",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(input)
    })
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        res = data;
        courseDetial()
    })
    .catch(function(error){
        console.log(error)
    })
}

function searchByName(){
    let input = {
        "message":searchInput.value 
        }

    fetch("http://localhost:8080/course_Serech_ByName",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(input)
    })
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        res = data;
        courseDetial()
    })
    .catch(function(error){
        console.log(error)
    })
}



function searchAll(){
    let input = {
    "message":searchInput.value 
    }

    // console.log(searchInput.value)
    fetch("http://localhost:8080/show_All_Course",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(input)
    })
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        res = data;
        allCourse()
    })
    .catch(function(error){
        console.log(error)
    })
}


function allCourse(){
    let allRes = [];
    let id = "";
    allRes = JSON.parse(JSON.stringify(res));
    
    console.log(allRes);
    allRes.forEach(function(i){
        id += `<li>${"courseId:"+" "+i.courseId}</li>`
            +`<li>${"courseName:"+" "+i.courseName}</li>`
            +`<li>${"--------------"}</li>`;
    })
    textul.innerHTML = id;
}

function courseDetial(){
    let detialRes = [];
    let id = "";
    detialRes = JSON.parse(JSON.stringify(res));
    console.log(detialRes);
    detialRes.forEach(function(i){
        id +=  `<li>${"courseId:"+" "+i.courseId}</li>`
            + `<li>${"courseName:"+" "+i.courseName}</li>`
            + `<li>${"Day:"+" "+i.day}</li>`
            + `<li>${"StartTime:"+" "+i.courseStartTime}</li>`
            + `<li>${"EndTime:"+" "+i.courseEndTime}</li>`
            + `<li>${"credits:"+" "+i.credits}</li>`
            + `<li>${"persons:"+" "+i.persons}</li>`
            +`<li>${"--------------"}</li>`;
    })
    textul.innerHTML = id;
}


searchbtn.addEventListener('click', function(){
    const pattern = new RegExp("[A-Za-z0-9]+");
    console.log(searchInput.value)
    if(pattern.test(searchInput.value)){
        if("all" === searchInput.value){
            searchAll();
        }else{
        searchById();
        }
    }else{
        textul.innerHTML =  `<li>${"請依照指令輸入"}</li>`;
    }

    const chpattern = new RegExp("[\u4E00-\u9FA5]+");
    if(chpattern.test(searchInput.value)){
        searchByName();
    }else{
        textul.innerHTML =  `<li>${"請依照指令輸入"}</li>`;
    }
    
    
    // searchAll();
    // console.log(searchInput.value)
})