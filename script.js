// btn=document.getElementById("button")
// btn.onclick=function(){
//     // console.log("click");
//     alert("click moi");
// }
// console.log(document.getElementById("button"));
// btn.addEventListener("click",function())
// {
//     console.log("hello");
// }
var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
var cal = document.getElementById("button");
var result = document.getElementById("result");
var signe = document.getElementById("sign");
 
cal.onclick = function() {
    //  alert(parseInt(number1.value)+ parseInt(number2.value));
    //  console.log();
    // var calc = parseInt(number1.value)+ parseInt(number2.value);
    // result.innerHTML = calc;
    if(signe.value === "+"){
        var calc = parseInt(number1.value)+ parseInt(number2.value)
        result.innerHTML = calc;
    }
    if(signe.value === "/"){
        var calc = parseInt(number1.value)/ parseInt(number2.value)
        result.innerHTML = calc;
    }
    if(signe.value === "*"){
        var calc = parseInt(number1.value)* parseInt(number2.value)
        result.innerHTML = calc;
    }
    if(signe.value === "-"){
        var calc = parseInt(number1.value)- parseInt(number2.value)
        result.innerHTML = calc;
    }
  
 }

