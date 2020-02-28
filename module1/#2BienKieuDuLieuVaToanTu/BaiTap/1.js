
function   show() {
    var Amount = document.getElementById("Amount");
    var FromCurrency = document.getElementById("FromCurrency");
    var ToCurrency  = document.getElementById("ToCurrency");
    var result = document.getElementById("result");
    var Total;
    if (FromCurrency.value === "VN" && ToCurrency.value === "USD"){
        Total = Amount.value/23000;
    }else if (FromCurrency.value === "USD" && ToCurrency.value === "VN"){
        Total= Amount.value*23000;
    }else if (FromCurrency.value === "VN" && ToCurrency.value === "VN"){
        Total = Amount.value * 1;
    }else if (FromCurrency.value === "USD" && ToCurrency.value === "USD"){
        Total = Amount.value * 1
    }
    result.innerText = 'Total ='+Total;
}