var a = prompt('so phut cua cuoc dien thoai') * 1;
var b = 25000;//phi thue bao bat buoc;
var total = '';
if (a <= 50) {
   total= "tong cuoc thue bao la :" + (a * 600 + b );
} else if (a <= 200) {
    total= "tong cuoc thue bao la :" + ((a-50) * 400 + b + 30000);
} else {
    total= "tong cuoc thue bao la :" + ((a-200) * 200 + b + 110000);
}
    alert(total)