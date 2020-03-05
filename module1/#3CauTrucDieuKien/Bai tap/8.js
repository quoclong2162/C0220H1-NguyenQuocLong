var a=prompt('diem kiem tra 15p')*1
var b=prompt('diem kiem tra 1 tiet')*1
var c=prompt('diem kiem tra cuoi ki')*1
var total=(a+b*2+c*3)/6
if (total>8){
    alert('gioi')
} else if (7<total) {
    alert('kha')
} else if (6<total) {
    alert('trung binh')
} else if (5<total) {
    alert('yeu')
} else {
    alert('kem')
}


