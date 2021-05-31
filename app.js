'use strict';
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

let worksHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let createT = document.getElementById('mmmm')
let tableElm = document.createElement('table')
createT.appendChild(tableElm)
let trElm1 = document.createElement('tr');
tableElm.appendChild(trElm1);
let thElm0 = document.createElement('th');
trElm1.appendChild(thElm0);
thElm0.textContent = '';
let thElm1 = document.createElement('th');
trElm1.appendChild(thElm1);
thElm1.textContent = '6:00am';
let thElm2 = document.createElement('th');
trElm1.appendChild(thElm2);
thElm2.textContent = '7:00am';
let thElm3 = document.createElement('th');
trElm1.appendChild(thElm3);
thElm3.textContent = '8:00am';
let thElm4 = document.createElement('th');
trElm1.appendChild(thElm4);
thElm4.textContent = '9:00am';
let thElm5 = document.createElement('th');
trElm1.appendChild(thElm5);
thElm5.textContent = '10:00am';
let thElm6 = document.createElement('th');
trElm1.appendChild(thElm6);
thElm6.textContent = '11:00am';
let thElm7 = document.createElement('th');
trElm1.appendChild(thElm7);
thElm7.textContent = '12:00am';
let thElm8 = document.createElement('th');
trElm1.appendChild(thElm8);
thElm8.textContent = '1:00pm';
let thElm9 = document.createElement('th');
trElm1.appendChild(thElm9);
thElm9.textContent = '2:00pm';
let thElm10 = document.createElement('th');
trElm1.appendChild(thElm10);
thElm10.textContent = '2:00pm';
let thElm11 = document.createElement('th');
trElm1.appendChild(thElm11);
thElm11.textContent = '3:00pm';
let thElm12 = document.createElement('th');
trElm1.appendChild(thElm12);
thElm12.textContent = '4:00pm';
let thElm13 = document.createElement('th');
trElm1.appendChild(thElm13);
thElm13.textContent = '5:00pm';
let thElm14 = document.createElement('th');
trElm1.appendChild(thElm14);
thElm14.textContent = '6:00pm';
let thElm15 = document.createElement('th');
trElm1.appendChild(thElm15);
thElm15.textContent = '7:00pm';
let thElm16 = document.createElement('th');
trElm1.appendChild(thElm16);
thElm15.textContent = 'Daily Location Total';


function SalmonCookies(loactionName, minCust, maxCust, avgCookieSale) {
    this.loactionName = loactionName;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookieSale = avgCookieSale;

    this.total = 0;
    this.cusNum = [];
    this.ammOfPurches = [];
    
    console.log(this);
}

SalmonCookies.prototype.funCustomerNum = function () {
    for (let l = 0; l <= worksHours.length; l++) {

        this.cusNum.push(getRandomInt(this.minCust, this.maxCust));
       
}
}
SalmonCookies.prototype.funammOfPurches = function () {
    for (let i = 0; i <= worksHours.length; i++) {
        this.ammOfPurches.push(this.cusNum[i] * Math.ceil(this.avgCookieSale));
        this.total = this.total + this.ammOfPurches[i];
    }


}

SalmonCookies.prototype.render = function () {

    let trElm2 = document.createElement('tr');
    tableElm.appendChild(trElm2);
    let tdElm1 = document.createElement('td');
    trElm2.appendChild(tdElm1);
    tdElm1.textContent = this.loactionName;
}
   

let seattle = new SalmonCookies("Seattle", 23, 65, 6.3);
let tokyo = new SalmonCookies("Tokyo", 3, 24, 1.2);
let dubai = new SalmonCookies("Dubai", 11, 38, 3.7);
let paris = new SalmonCookies("Paris", 20, 38, 2.3);
let lima = new SalmonCookies("Lima", 2, 16, 4.6);
let resultoftotal=new SalmonCookies("totals");
seattle.funCustomerNum();
seattle.funammOfPurches();
tokyo.funCustomerNum();
tokyo.funammOfPurches();
dubai.funCustomerNum();
paris.funCustomerNum();
lima.funCustomerNum();
dubai.funammOfPurches();
paris.funammOfPurches();
lima.funammOfPurches();
resultoftotal.funCustomerNum();
resultoftotal.funammOfPurches();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
resultoftotal.render(); 