// 輸入區
const cIdInput = document.querySelector("#cId");
const cNameInput = document.querySelector("#cName");
const cDayInput = document.querySelector("#cDay");
const cStartTimeInput = document.querySelector("#cStartTime");
const cEndTimeInput = document.querySelector("#cEndTime");
const cCreditsInput = document.querySelector("#cCredits");

//修改課程ID
const changeID = document.querySelector("#changeID");

//創建按鈕
const createBtn = document.querySelector("#createbtn");

//刪除按鈕
const deleteBtn = document.querySelector("#deletebtn");

//編輯按鈕
const editBtn = document.querySelector("#editbtn");

//回應區
const reaUl = document.querySelector(".reaUl");

//刷新按鈕
const refresh = document.querySelector(".Refresh")

let arr = [];

refresh.addEventListener('click', function(){
    reaUl.innerHTML = " "; 
})

// ==-- Create --==
function create(){
    let body = {
        "courseinfo_list": [
            {
                "courseId": cIdInput.value,
                "courseName": cNameInput.value,
                "day": cDayInput.value,
                "courseStartTime": cStartTimeInput.value,
                "courseEndTime": cEndTimeInput.value,
                "credits": cCreditsInput.value
            }
        ]
    }


    fetch("http://localhost:8080/create_Course",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(body)
    })
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        // console.log(body)
        console.log(data)
        arr = data;
        createShow();
    })
    .catch(function(error){
        console.log(error)
    })
}

function createShow(){
    let text = "";
    let res = [];
    res  = JSON.parse(JSON.stringify(arr))
    res.courseinfo_list.forEach(function(i){
        text += `<li>${"CourseId:"+i.courseId}</li>`
            +`<li>${"CourseId:"+i.courseName}</li>`
            +`<li>${"CourseId:"+i.day}</li>`
            +`<li>${"CourseId:"+i.courseStartTime}</li>`
            +`<li>${"CourseId:"+i.courseEndTime}</li>`
            +`<li>${"CourseId:"+i.credits}</li>`
            +`<p>${"--------------------"}</p>`;
    })
    reaUl.innerHTML = text;
    // console.log(res)
    
}

createBtn.addEventListener('click', function(){
    // console.log(body)
    create();
})

// ==-- Delete --==
function Delete(){
    let body = {
                "courseid": cIdInput.value
    }

    fetch("http://localhost:8080/delete_Course",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(body)
    })
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        // console.log(body)
        console.log(data)
        arr = data;
        deleteShow();
    })
    .catch(function(error){
        console.log(error)
    })
}

function deleteShow(){
    let res = [];
    let text ="";
    res = JSON.parse(JSON.stringify(arr))
    text = `<li>${res.message}</li>`;
    reaUl.innerHTML = text;
}

deleteBtn.addEventListener('click', function(i){
    Delete();
})


// ==-- Edit --==
function Edit(){
    let body = {
        "courseinfo": 
            {
                "courseId": cIdInput.value,
                "courseName": cNameInput.value,
                "day": cDayInput.value,
                "courseStartTime": cStartTimeInput.value,
                "courseEndTime": cEndTimeInput.value,
                "credits": cCreditsInput.value
            },"courseid" : changeID.value
    }

    fetch("http://localhost:8080/edit_Credits",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(body)
    })
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        // console.log(body)
        console.log(data)
        arr = data;
        editShow();
        
    })
    .catch(function(error){
        console.log(error)
    })
}

function editShow(){
    let text = "";
    let res = [];
    res  = JSON.parse(JSON.stringify(arr))
    
        text += `<li>${"CourseId:"+res.courseinfo.courseId}</li>`
            +`<li>${"CourseId:"+res.courseinfo.courseName}</li>`
            +`<li>${"CourseId:"+res.courseinfo.day}</li>`
            +`<li>${"CourseId:"+res.courseinfo.courseStartTime}</li>`
            +`<li>${"CourseId:"+res.courseinfo.courseEndTime}</li>`
            +`<li>${"CourseId:"+res.courseinfo.credits}</li>`
            +`<li>${res.message}</li>`
            +`<p>${"--------------------"}</p>`;
    
    reaUl.innerHTML = text;
    // console.log(res)
    
}

editBtn.addEventListener('click', function(){
    Edit();
})