//ax+b=0
var a = prompt('nhap a') * 1;
if (a === 0) {
    alert('vo nghiem');
} else {
    var b = prompt('nhap b') * 1;
    var x
    x = (- b) / a;
    alert('phuong trinh co nghiem la : ' + x)
}
