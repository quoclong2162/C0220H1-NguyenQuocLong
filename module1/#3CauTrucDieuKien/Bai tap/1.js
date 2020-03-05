var weight=prompt('chi so can nang ')*1
var height=prompt('chi so chieu cao')*1
var bmi = weight/(height*height)
    if (bmi<18.5){
        alert('Underweight')
    }else
        if (bmi<25.0) {
            alert('Normal')
        }else
            if (bmi<30.0) {
                alert('Overweight')
            }else
                alert('obese')

