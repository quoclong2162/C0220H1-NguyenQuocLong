var taikhoan= prompt('ten dang nhap')
if (taikhoan === 'null'){
    alert('canceled')
}
else if (taikhoan === 'Admin') {
   var matkhau=prompt('nhap mat khau')
    if (matkhau === 'TheMaster') {
        alert('Welcome')
    } else if (matkhau === 'null') {
        alert('Canceled')
    } else {
        alert('Wrong Password ')
    }
}
else {
    alert("i don't know you")
}


