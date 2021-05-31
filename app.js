'use strict';
function randomValue(min, max) {
    let x = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(x)
    return x;
}
let Seattle = {

    minCust: 23,
    maxCust: 65,
    AvgCookieSale: 6.3,
    arr: [],
amm:[],

    randomNum: function () {

        //arr.push(randomValue)
        //return random;
        for (let l = 0; l <= 14; l++) {
        let m = randomValue(this.minCust, this.maxCust);
        this.arr.push(m);
        console.log(this.arr.push(m));
        let purchased =m*this.AvgCookieSale ;
        this.amm.push(purchased);
        }

        return;
    },

    }




Seattle.randomNum();


