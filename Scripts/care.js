



var stdid = document.getElementById("stdid")
var title = document.getElementsByName("tit")
var gender = document.getElementsByName("gen")
var fname = document.getElementById("name")
var confirmname = document.getElementById("cname")
var cityofbirth = document.getElementById("cob")
var dob = document.getElementById("dob")
var addr = document.getElementById("addr")
var street = document.getElementById("str")
var city = document.getElementById("city")
var phoneNo = document.getElementById("phno")
var email = document.getElementById("mail")


var reg = document.getElementById("output")

function myFunction(){
    var data={
        "stdId":stdid.value,
        "title":title.value,
        "gender":gender.value,
        "finame":fname.value,
        "cnName":confirmname,
        "cityOfBirth":cityofbirth.value,"dOB":dob.value,"address":addr.value,
        "streetName":street.value,"cityname":city.value,
        "phoneNumber":phoneNo.value,"email":email.value,
        


    }
    reg.innerHTML=JSON.stringify(data)
  // const obj = JSON.parse(data);
}
var print = document.getElementById("regapplication");
print.addEventListener("click", myFunction, false);
document.getElementById("regapplication").innerHTML = obj.stdId +obj.title;
