window.addEventListener('load', function() {
    console.log('All assets are loaded')


var studname = document.getElementsByName("Stdnames")
var studaddr = document.getElementsByName("address")
var stddob = document.getElementById("birthdate")
var age = document.getElementById("age")
var stdph =document.getElementById("phno")
var aadhar = document.getElementById("aadharno")
var gender =document.getElementsByName("gen")
var fname = document.getElementById("fathername")
var foccu = document.getElementsByName("fatheroccup")
var mname =document.getElementsByName("mother")
var moccu = document.getElementsByName("motheroccu")
var fphone = document.getElementsByName("fphone")
var mphone = document.getElementsByName("mphone")
var transfer = document.getElementsByName("transfer")
var community = document.getElementsByName("comm")
var tamil = document.getElementsByName("tamil")
var english = document.getElementsByName("english")
var maths = document.getElementsByName("maths")
var physics = document.getElementsByName("physics")
var chemistry = document.getElementsByName("chemistry")
var computers = document.getElementsByName("cs")
var tentamil = document.getElementsByName("tamil10")
var tenenglish = document.getElementsByName("english10")
var tenmaths = document.getElementsByName("maths10")
var sceince = document.getElementsByName("sceince")
var ssceince = document.getElementsByName("ss")
var nss = document.getElementById("nss")
var ncc = document.getElementById("ncc")
var sports =document.getElementById("sports")
var submitButton = document.getElementById("submit")

var conOutput = document.getElementById("convertop")
 

 function myFunction(){
    console.log("start");
    var data ={
        "stdName":studname.value,
        "studAddr":studaddr.value,
        "stdDob":stddob.value,
        "stdAge":age.value,
        "stdphone":stdph.value,
        "stdAadhar":aadhar.value,
        "gender":gender.value,
        "fatherName":fname.value,
        "fatherOccu":foccu.value,
        "fatherNo":fphone.value,
        "motherName":mname.value,
        "motherOccu":moccu.value,"motherph":mphone.value,
        "transferNO":transfer.value,"caste":community.value,
        // "tamiltw":tamil.value,"engtw":english.value,"mathstw":maths.value,"physics":physics.value,
        // "chemistry":chemistry.value,"cs":computers.value,"tamilten":tentamil.value,
        // "englishTen":tenenglish.value,"sceince":sceince.value,"SocialScience":ssceince.value,
        // "nSS":nss.value,"nCC":ncc.value,"sportS":sports.value
        
    }
    conOutput.innerHTML=JSON.stringify(data)
    console.log("end");
}

var el = document.getElementById("register");
el.addEventListener("click", myFunction, false);

})