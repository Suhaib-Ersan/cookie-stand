'use strict';

let seattle = {
  cityName : 'Seattle',
  minCustPHour : 23,
  maxCustPHour : 65,
  avgCookiesPCust : 6.3,
  totalCookies: 0,
  activeHours : ['6am-7am','7am-8am','8am-9am','9am-10am','10am-11am','11am-12pm','12pm-1pm','1pm-2pm','2pm-3pm','3pm-4pm','4pm-5pm','5pm-6pm','6pm-7pm','7pm-8pm'],
  randomCustPHour: [],
  avgCookiesPHour: [],

  randomCustNumFunction: function() {
    for (let i = 0; i < this.activeHours.length; i++) {
      this.randomCustPHour.push(Math.floor(Math.random() * (this.maxCustPHour - this.minCustPHour + 1) + this.minCustPHour));
    }
  },
  randomCookiesNumFunctionPlusTotal: function() {
    for (let i = 0; i < this.activeHours.length; i++) {
      this.avgCookiesPHour.push(Math.ceil(this.randomCustPHour[i]*this.avgCookiesPCust));
      this.totalCookies += this.avgCookiesPHour[i];
    }
  },
  renderFunction: function() {
    let divEl = document.getElementById('container');
    let articleEl = document.createElement('article');
    divEl.appendChild(articleEl);
    let h2El = document.createElement('h2');
    h2El.textContent = this.cityName;
    articleEl.appendChild(h2El);
    for (let i = 0; i < this.activeHours.length; i++) {
      let liEl = document.createElement('li');
      articleEl.appendChild(liEl);
      liEl.textContent = this.activeHours[i]+': '+this.avgCookiesPHour[i];
    }
    let totalCookiesLiEl = document.createElement('li');
    articleEl.appendChild(totalCookiesLiEl);
    totalCookiesLiEl.textContent = 'total cookies: '+this.totalCookies;
  },
};
seattle.randomCustNumFunction();
seattle.randomCookiesNumFunctionPlusTotal();
seattle.renderFunction();

let Tokyo = {
  cityName : 'Tokyo',
  minCustPHour : 3,
  maxCustPHour : 24,
  avgCookiesPCust : 1.2,
  totalCookies: 0,
  activeHours : ['6am-7am','7am-8am','8am-9am','9am-10am','10am-11am','11am-12pm','12pm-1pm','1pm-2pm','2pm-3pm','3pm-4pm','4pm-5pm','5pm-6pm','6pm-7pm','7pm-8pm'],
  randomCustPHour: [],
  avgCookiesPHour: [],

  randomCustNumFunction: function() {
    for (let i = 0; i < this.activeHours.length; i++) {
      this.randomCustPHour.push(Math.floor(Math.random() * (this.maxCustPHour - this.minCustPHour + 1) + this.minCustPHour));
    }
  },
  randomCookiesNumFunctionPlusTotal: function() {
    for (let i = 0; i < this.activeHours.length; i++) {
      this.avgCookiesPHour.push(Math.ceil(this.randomCustPHour[i]*this.avgCookiesPCust));
      this.totalCookies += this.avgCookiesPHour[i];
    }
  },
  renderFunction: function() {
    let divEl = document.getElementById('container');
    let articleEl = document.createElement('article');
    divEl.appendChild(articleEl);
    let h2El = document.createElement('h2');
    h2El.textContent = this.cityName;
    articleEl.appendChild(h2El);
    for (let i = 0; i < this.activeHours.length; i++) {
      let liEl = document.createElement('li');
      articleEl.appendChild(liEl);
      liEl.textContent = this.activeHours[i]+': '+this.avgCookiesPHour[i];
    }
    let totalCookiesLiEl = document.createElement('li');
    articleEl.appendChild(totalCookiesLiEl);
    totalCookiesLiEl.textContent = 'total cookies: '+this.totalCookies;
  },
};
Tokyo.randomCustNumFunction();
Tokyo.randomCookiesNumFunctionPlusTotal();
Tokyo.renderFunction();

let Dubai = {
  cityName : 'Dubai',
  minCustPHour : 11,
  maxCustPHour : 38,
  avgCookiesPCust : 3.7,
  totalCookies: 0,
  activeHours : ['6am-7am','7am-8am','8am-9am','9am-10am','10am-11am','11am-12pm','12pm-1pm','1pm-2pm','2pm-3pm','3pm-4pm','4pm-5pm','5pm-6pm','6pm-7pm','7pm-8pm'],
  randomCustPHour: [],
  avgCookiesPHour: [],

  randomCustNumFunction: function() {
    for (let i = 0; i < this.activeHours.length; i++) {
      this.randomCustPHour.push(Math.floor(Math.random() * (this.maxCustPHour - this.minCustPHour + 1) + this.minCustPHour));
    }
  },
  randomCookiesNumFunctionPlusTotal: function() {
    for (let i = 0; i < this.activeHours.length; i++) {
      this.avgCookiesPHour.push(Math.ceil(this.randomCustPHour[i]*this.avgCookiesPCust));
      this.totalCookies += this.avgCookiesPHour[i];
    }
  },
  renderFunction: function() {
    let divEl = document.getElementById('container');
    let articleEl = document.createElement('article');
    divEl.appendChild(articleEl);
    let h2El = document.createElement('h2');
    h2El.textContent = this.cityName;
    articleEl.appendChild(h2El);
    for (let i = 0; i < this.activeHours.length; i++) {
      let liEl = document.createElement('li');
      articleEl.appendChild(liEl);
      liEl.textContent = this.activeHours[i]+': '+this.avgCookiesPHour[i];
    }
    let totalCookiesLiEl = document.createElement('li');
    articleEl.appendChild(totalCookiesLiEl);
    totalCookiesLiEl.textContent = 'total cookies: '+this.totalCookies;
  },
};
Dubai.randomCustNumFunction();
Dubai.randomCookiesNumFunctionPlusTotal();
Dubai.renderFunction();

let Paris = {
  cityName : 'Paris',
  minCustPHour : 20,
  maxCustPHour : 38,
  avgCookiesPCust : 2.3,
  totalCookies: 0,
  activeHours : ['6am-7am','7am-8am','8am-9am','9am-10am','10am-11am','11am-12pm','12pm-1pm','1pm-2pm','2pm-3pm','3pm-4pm','4pm-5pm','5pm-6pm','6pm-7pm','7pm-8pm'],
  randomCustPHour: [],
  avgCookiesPHour: [],

  randomCustNumFunction: function() {
    for (let i = 0; i < this.activeHours.length; i++) {
      this.randomCustPHour.push(Math.floor(Math.random() * (this.maxCustPHour - this.minCustPHour + 1) + this.minCustPHour));
    }
  },
  randomCookiesNumFunctionPlusTotal: function() {
    for (let i = 0; i < this.activeHours.length; i++) {
      this.avgCookiesPHour.push(Math.ceil(this.randomCustPHour[i]*this.avgCookiesPCust));
      this.totalCookies += this.avgCookiesPHour[i];
    }
  },
  renderFunction: function() {
    let divEl = document.getElementById('container');
    let articleEl = document.createElement('article');
    divEl.appendChild(articleEl);
    let h2El = document.createElement('h2');
    h2El.textContent = this.cityName;
    articleEl.appendChild(h2El);
    for (let i = 0; i < this.activeHours.length; i++) {
      let liEl = document.createElement('li');
      articleEl.appendChild(liEl);
      liEl.textContent = this.activeHours[i]+': '+this.avgCookiesPHour[i];
    }
    let totalCookiesLiEl = document.createElement('li');
    articleEl.appendChild(totalCookiesLiEl);
    totalCookiesLiEl.textContent = 'total cookies: '+this.totalCookies;
  },
};
Paris.randomCustNumFunction();
Paris.randomCookiesNumFunctionPlusTotal();
Paris.renderFunction();

let Lima = {
  cityName : 'Lima',
  minCustPHour : 2,
  maxCustPHour : 16,
  avgCookiesPCust : 4.6,
  totalCookies: 0,
  activeHours : ['6am-7am','7am-8am','8am-9am','9am-10am','10am-11am','11am-12pm','12pm-1pm','1pm-2pm','2pm-3pm','3pm-4pm','4pm-5pm','5pm-6pm','6pm-7pm','7pm-8pm'],
  randomCustPHour: [],
  avgCookiesPHour: [],

  randomCustNumFunction: function() {
    for (let i = 0; i < this.activeHours.length; i++) {
      this.randomCustPHour.push(Math.floor(Math.random() * (this.maxCustPHour - this.minCustPHour + 1) + this.minCustPHour));
    }
  },
  randomCookiesNumFunctionPlusTotal: function() {
    for (let i = 0; i < this.activeHours.length; i++) {
      this.avgCookiesPHour.push(Math.ceil(this.randomCustPHour[i]*this.avgCookiesPCust));
      this.totalCookies += this.avgCookiesPHour[i];
    }
  },
  renderFunction: function() {
    let divEl = document.getElementById('container');
    let articleEl = document.createElement('article');
    divEl.appendChild(articleEl);
    let h2El = document.createElement('h2');
    h2El.textContent = this.cityName;
    articleEl.appendChild(h2El);
    for (let i = 0; i < this.activeHours.length; i++) {
      let liEl = document.createElement('li');
      articleEl.appendChild(liEl);
      liEl.textContent = this.activeHours[i]+': '+this.avgCookiesPHour[i];
    }
    let totalCookiesLiEl = document.createElement('li');
    articleEl.appendChild(totalCookiesLiEl);
    totalCookiesLiEl.textContent = 'total cookies: '+this.totalCookies;
  },
};
Lima.randomCustNumFunction();
Lima.randomCookiesNumFunctionPlusTotal();
Lima.renderFunction();
