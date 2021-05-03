'use strict';

let seattle = {
  minCustPHour : 23,
  maxCustPHour : 65,
  avgCookiesPCust : 6.3,
  activeHours : ['6am-7am','7am-8am','8am-9am','9am-10am','10am-11am','11am-12pm','12pm-1pm','1pm-2pm','2pm-3pm','3pm-4pm','4pm-5pm','5pm-6pm','6pm-7pm','7pm-8pm'],
  randomCustPHour: [],
  avgCookiesPHour: [],

  randomCustNumFunction: function() {
    for (let i = 0; i < this.activeHours.length; i++) {
      this.randomCustPHour.push(Math.floor(Math.random() * (this.maxCustPHour - this.minCustPHour + 1) + this.minCustPHour));
    }
  },
  randomCookiesNumFunction: function() {
    for (let i = 0; i < this.activeHours.length; i++) {
      this.avgCookiesPHour.push(Math.ceil(this.randomCustPHour[i]*this.avgCookiesPCust));
    }
  },
  renderFunction: function() {
    let divEl = document.getElementById('container');
    
  }
};



seattle.randomCustNumFunction();
seattle.randomCookiesNumFunction();
console.log(seattle.randomCustPHour);
console.log(seattle.avgCookiesPHour);
