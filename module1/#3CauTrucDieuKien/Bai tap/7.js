var a=prompt('nhap vao so a ')*1
var b=prompt('nhap vao so b')*1
var c=prompt('nhap vao so c')*1
if (a>b)    {
    if (a>c)    {
        alert('so lon nhat la'+a)
    }else {
        alert('so lon nhat la '+c)
    }
}else {
    if (b>c) {
        alert('so lon nhat la' + b)
    }else
        alert('so lon nhat la '+c)
}