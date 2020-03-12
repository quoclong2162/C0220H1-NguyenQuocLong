var name = document.getElementById('Name');
var idnumber = document.getElementById('Idnumber');
var birth = document.getElementById('Birth');
var email = document.getElementById('Email');
var address = document.getElementById('Address');
var customer = document.getElementById('TypeCustomer');
var discountOfAddress;
var discountOfRentDays;
var discountOfCustomer;
var amount = document.getElementById('Amount');
var rentDays = document.getElementById('RentDays') * 1;
var service = document.getElementById('Service');
var typeRoom = document.getElementById('TypeRoom');
var result = document.getElementById('result');
var money;

function show() {
    if (Service.value === "Villa") {
        money = 500;
    } else if (Service.value === "House") {
        money = 300;
    } else if (Service.value === "Room") {
        money = 100;
    }

    if (Address.value === "Đà Nẵng") {
        discountOfAddress = 20;
    } else if (Address.value === "Huế") {
        discountOfAddress = 10;
    } else if (Address.value === "Quảng Nam") {
        discountOfAddress = 5;
    }else {
        discountOfAddress = 0;
    }

    if (RentDays.value >= 7) {
        discountOfRentDays = 30;
    } else if (RentDays.value >= 5) {
        discountOfRentDays = 20;
    } else if (2 <= RentDays.value <= 4) {
        discountOfRentDays = 10;
    }


    if (TypeCustomer.value === 'Diamond') {
        discountOfCustomer = 15;
    } else if (TypeCustomer.value === 'Platinum') {
        discountOfCustomer = 10;
    } else if (TypeCustomer.value === 'Gold') {
        discountOfCustomer = 5;
    } else if (TypeCustomer.value === 'Silver') {
        discountOfCustomer = 2;
    } else if (TypeCustomer.value === 'Member') {
        discountOfCustomer = 0;
    }
    var discount = discountOfAddress + discountOfCustomer + discountOfRentDays;
    var total = money * RentDays.value - discount;


    result.innerText = Name.value + '\n' + Idnumber.value + '\n' + Birth.value + '\n' + Email.value + '\n' + Address.value + '\n' + TypeCustomer.value + '\n' + Amount.value + '\n' + RentDays.value + '\n' + Service.value + '\n' + TypeRoom.value + '\n' + total;

}

function show1() {
    result.innerText = ''

}

