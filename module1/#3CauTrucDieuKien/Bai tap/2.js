
function show() {
    var month = document.getElementById('month')
    var result= document.getElementById('result')
    switch (month.value*1) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            result.innerText='thang' +month.value+'co 31 ngay'
            break
        case 2:
            result.innerText='thang' +month.value+'co 28 hoac 29 ngay'
            break
        case 4:
        case 6:
        case 9:
        case 11:
            result.innerText='thang'+month.value+'co 30 ngay'
            break
        default:
            result.innerText='nhap sai'

    }
}
