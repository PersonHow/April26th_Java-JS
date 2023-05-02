const btn = document.querySelector(".btn")
const btn1 = document.querySelector(".btn1")
const p1 = document.querySelector(".p1")

const input = document.querySelector("#inputText")

let sData = [];

let body ={
    "courseinfo_list": [
        {
            "courseId": "GG1",
            "courseName": "全端互動",
            "day": "星期二",
            "courseStartTime": "1300",
            "courseEndTime": "1500",
            "credits": "2"
        }
    ]
}

function create_Course(){
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
    console.log(data);
    sData = data;
})
.catch(function(error){
    console.log(error);
})
}


function message(){
    console.log("bili-bili")
    // console.log(sData)
    const mData = JSON.parse(JSON.stringify(sData))
    console.log(mData);
}

btn.addEventListener("click", function(){
    // console.log(123)
    // create_Course();
    // message();
})



btn1.addEventListener('click', function(){
    console.log(input.value)
    const chpattern = new RegExp("[A-Za-z0-9]+")
    const chch = "all"
    console.log(chpattern.test(input))
    if(chpattern.test(input)){
        console.log("can do it")
    }
    if("all" === input.value){
        console.log("true")
    }else{
    console.log("false")
    }
    // message();
})

