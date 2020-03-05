var a=prompt('nhap doanh so ban hang ')*1
var b=200000
if (a>100) {
    alert('hoa hong nhan duoc ' +a*0.2*b)
} else if (a>80){
    alert('hoa hong nhan duoc ' +a*0.15*b)
} else if ( a>50){
    alert('hoa hong nhan duoc ' +a*0.12*b)
} else {
    alert('hoa hong nhan duoc ' +a*0.1*b)
}
