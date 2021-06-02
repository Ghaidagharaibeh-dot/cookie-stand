'use strict';
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}
let worksHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let firstElm = document.getElementById('elm1');
let Seattle = {
    place:'srattle',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  cusNum: [],
  perchesPerH: [],
  total:0,

  randomNum : function () {
      

    for (let l = 0; l <= worksHours.length; l++) {

        this.cusNum.push(getRandomInt(this.minCust, this.maxCust));


    }
return
  },
  ammOfPurches: function () {
      

    for (let i = 0; i <= worksHours.length; i++) {
        this.perchesPerH.push(this.cusNum[i] * Math.ceil(this.avgCookieSale));
        this.total = this.total + this.perchesPerH[i];


    }
return
  },
  render: function(){
      let locaonName=document.createElement('h1');
      firstElm.appendChild(locaonName);
      locaonName.textContent=this.place;

      let list = document.createElement('ul');   
      firstElm.appendChild(list);
      for(let i = 0 ; i < worksHours.length; i++){
        let items = document.createElement('li');
        list.appendChild(items);
        items.textContent = `${worksHours[i]} : ${this.perchesPerH[i]} cookies`;
    }
    let totals = document.createElement('li');
        list.appendChild(totals);
        totals.textContent = `Totals : ${this.total} `;

  },

}
Seattle.randomNum();
Seattle.ammOfPurches();
Seattle.render();
console.log(Seattle); 

let Tokyo = {
    place:'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  cusNum: [],
  perchesPerH: [],
  total:0,

  randomNum : function () {
      

    for (let l = 0; l <= worksHours.length; l++) {

        this.cusNum.push(getRandomInt(this.minCust, this.maxCust));


    }
return
  },
  ammOfPurches: function () {
      

    for (let i = 0; i <= worksHours.length; i++) {
        this.perchesPerH.push(this.cusNum[i] * Math.ceil(this.avgCookieSale));
        this.total = this.total + this.perchesPerH[i];


    }
return
  },
  render: function(){
      let locaonName=document.createElement('h1');
      firstElm.appendChild(locaonName);
      locaonName.textContent=this.place;

      let list = document.createElement('ul');   
      firstElm.appendChild(list);
      for(let i = 0 ; i < worksHours.length; i++){
        let items = document.createElement('li');
        list.appendChild(items);
        items.textContent = `${worksHours[i]} : ${this.perchesPerH[i]} cookies`;
    }
    let totals = document.createElement('li');
        list.appendChild(totals);
        totals.textContent = `Totals : ${this.total} `;

  },

}
Tokyo.randomNum();
Tokyo.ammOfPurches();
Tokyo.render();
console.log(Tokyo); 


let Dubai = {
    place:'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  cusNum: [],
  perchesPerH: [],
  total:0,

  randomNum : function () {
      

    for (let l = 0; l <= worksHours.length; l++) {

        this.cusNum.push(getRandomInt(this.minCust, this.maxCust));


    }
return
  },
  ammOfPurches: function () {
      

    for (let i = 0; i <= worksHours.length; i++) {
        this.perchesPerH.push(this.cusNum[i] * Math.ceil(this.avgCookieSale));
        this.total = this.total + this.perchesPerH[i];


    }
return
  },
  render: function(){
      let locaonName=document.createElement('h1');
      firstElm.appendChild(locaonName);
      locaonName.textContent=this.place;

      let list = document.createElement('ul');   
      firstElm.appendChild(list);
      for(let i = 0 ; i < worksHours.length; i++){
        let items = document.createElement('li');
        list.appendChild(items);
        items.textContent = `${worksHours[i]} : ${this.perchesPerH[i]} cookies`;
    }
    let totals = document.createElement('li');
        list.appendChild(totals);
        totals.textContent = `Totals : ${this.total} `;

  },

}
Dubai.randomNum();
Dubai.ammOfPurches();
Dubai.render();
console.log(Dubai); 

let Paris = {
    place:'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  cusNum: [],
  perchesPerH: [],
  total:0,

  randomNum : function () {
      

    for (let l = 0; l <= worksHours.length; l++) {

        this.cusNum.push(getRandomInt(this.minCust, this.maxCust));


    }
return
  },
  ammOfPurches: function () {
      

    for (let i = 0; i <= worksHours.length; i++) {
        this.perchesPerH.push(this.cusNum[i] * Math.ceil(this.avgCookieSale));
        this.total = this.total + this.perchesPerH[i];


    }
return
  },
  render: function(){
      let locaonName=document.createElement('h1');
      firstElm.appendChild(locaonName);
      locaonName.textContent=this.place;

      let list = document.createElement('ul');   
      firstElm.appendChild(list);
      for(let i = 0 ; i < worksHours.length; i++){
        let items = document.createElement('li');
        list.appendChild(items);
        items.textContent = `${worksHours[i]} : ${this.perchesPerH[i]} cookies`;
    }
    let totals = document.createElement('li');
        list.appendChild(totals);
        totals.textContent = `Totals : ${this.total} `;

  },

}
Paris.randomNum();
Paris.ammOfPurches();
Paris.render();
console.log(Paris); 

let Lima = {
    place:'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  cusNum: [],
  perchesPerH: [],
  total:0,

  randomNum : function () {
      

    for (let l = 0; l <= worksHours.length; l++) {

        this.cusNum.push(getRandomInt(this.minCust, this.maxCust));


    }
return
  },
  ammOfPurches: function () {
      

    for (let i = 0; i <= worksHours.length; i++) {
        this.perchesPerH.push(this.cusNum[i] * Math.ceil(this.avgCookieSale));
        this.total = this.total + this.perchesPerH[i];


    }
return
  },
  render: function(){
      let locaonName=document.createElement('h1');
      firstElm.appendChild(locaonName);
      locaonName.textContent=this.place;

      let list = document.createElement('ul');   
      firstElm.appendChild(list);
      for(let i = 0 ; i < worksHours.length; i++){
        let items = document.createElement('li');
        list.appendChild(items);
        items.textContent = `${worksHours[i]} : ${this.perchesPerH[i]} cookies`;
    }
    let totals = document.createElement('li');
        list.appendChild(totals);
        totals.textContent = `Totals : ${this.total} `;

  },

}
Lima.randomNum();
Lima.ammOfPurches();
Lima.render();
console.log(Lima); 