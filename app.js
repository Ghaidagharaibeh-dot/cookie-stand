'use strict';
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}
let worksHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let Seattle = {

  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  arr: [],
  amm: [],
  total:0,

  randomNum: function () {

    for (let l = 0; l <= worksHours.length; l++) {

      this.arr.push(getRandomInt(this.minCust, this.maxCust));


    }

  },

  ammNum: function () {
    for(let i=0;i<=worksHours.length;i++){
      this.amm.push(this.arr[i]*Math.ceil(this.avgCookieSale));
      this.total=this.total+this.amm[i];
    }
   

    },
    
}
Seattle.randomNum();
Seattle.ammNum();
console.log(Seattle); 


