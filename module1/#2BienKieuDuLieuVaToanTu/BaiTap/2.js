var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var result = document.getElementById("result");
function show1() {
    result.innerText = num1.value*1+num2.value*1;
}
function show2() {
    result.innerText = num1.value-num2.value;
}
function show3() {
    result.innerText = num1.value*num2.value;
}
function show4() {
    result.innerText = num1.value/num2.value;
}

