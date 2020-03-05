var result = document.getElementById('result')
function show(a){
    result.innerText=result.value + a
}
function del() {
    result.innerText=''
}
function total() {
    result.innerText=eval(result.value)
}
