//ax^2+bx+c=0
var a = prompt('nhap so a') * 1;
if (a === 0) {
    let b = prompt('nhap so b') * 1;
    if (b === 0) {
        alert('phuong trinh vo nghiem');
    } else {
        let c = prompt("nhap c")*1;
        let x;
        x = (-c) / b;
        alert('phuong trinh co nghiem la x=' + x)
    }
} else {
    let b = prompt('nhap b') * 1;
    let c = prompt("nhap c") * 1;
    let x, x1, x2;
    var delta = (b * b) - (4 * a * c);
    if (delta > 0) {
        x1 = (-b+Math.sqrt(delta))/(2*a);
        x2 = (-b-Math.sqrt(delta))/(2*a);
        alert('phuong trinh co 2 nghiem phan biet x1 ='+x1+';x2='+x2);
    } else if (delta === 0) {
        x = (-b) / (2 * a);
        alert('phuong trinh co nghiem kep x1=x2=' + x);
    } else {
        alert('phuong trinh vo nghiem')
    }
}
