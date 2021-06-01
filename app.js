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

let thElm0 = document.createElement('th');
tableElm.appendChild(thElm0);
thElm0.textContent = 'mmmmmm';
for (let i = 0; i <= worksHours.length; i++) {
    let thElm2 = document.createElement('th');
    tableElm.appendChild(thElm2);
    thElm2.textContent = worksHours[i];
}
let thElm16 = document.createElement('th');
tableElm.appendChild(thElm16);
thElm16.textContent = 'Daily Location Total';

let arrOfObject =[];

function SalmonCookies(loactionName, minCust, maxCust, avgCookieSale) {
    this.loactionName = loactionName;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookieSale = avgCookieSale;


    this.cusNum = [];
    this.ammOfPurches = [];
    this.total = 0;
    arrOfObject.push(this);
    console.log(this);
}

SalmonCookies.prototype.funforCustomerNum = function () {
    for (let l = 0; l <= worksHours.length; l++) {

        this.cusNum.push(getRandomInt(this.minCust, this.maxCust));

    }
}
SalmonCookies.prototype.funammOfPurches = function () {
    for (let i = 0; i <= worksHours.length; i++) {
        this.ammOfPurches.push(this.cusNum[i] * Math.ceil(this.avgCookieSale));
        this.total = this.total + this.ammOfPurches[i];

    }
return

}

SalmonCookies.prototype.render = function () {

    let trElm = document.createElement('tr');
    tableElm.appendChild(trElm);

    let thFrow = document.createElement('th');
    trElm.appendChild(thFrow);
    thFrow.textContent = this.loactionName;


    for (let i = 1; i <= this.ammOfPurches.length; i++) {
        let tdElm = document.createElement('td');
        trElm.appendChild(tdElm);
        tdElm.textContent = this.ammOfPurches[i];
    }
    let lasrrow = document.createElement('th');
    trElm.appendChild(lasrrow);
    lasrrow.textContent = this.total;
    return
}


let seattle = new SalmonCookies("Seattle", 23, 65, 6.3, 0, [], []);
let tokyo = new SalmonCookies("Tokyo", 3, 24, 1.2, 0, [], []);
let dubai = new SalmonCookies("Dubai", 11, 38, 3.7, 0, [], []);
let paris = new SalmonCookies("Paris", 20, 38, 2.3, 0, [], []);
let lima = new SalmonCookies("Lima", 2, 16, 4.6, 0, [], []);


for (let i = 0; i <= arrOfObject.length; i++) {
   arrOfObject[i].funforCustomerNum();
    arrOfObject[i].funammOfPurches();
    arrOfObject[i].render();
}

function tabelfoot (){
    let footerRow=document.createElement('tr');
    tableElm.appendChild(footerRow);
    let contac=Document.createElement('th');
    footerRow.appendChild(contac);
    contac.textContent= 'Totals';
    for(let i=0;i<=worksHours.length;i++){
        let sum=0;
        for(let j=0;j<worksHours.length;j++){
            sum+=arrOfObject[j].ammOfPurches[j];
        }
        td=Document.createElement('td');
        lasrrow.appendChild(td);
        td.textContent=sum;
     //   sum=seattle.ammOfPurches[i]+
    }
    
}
