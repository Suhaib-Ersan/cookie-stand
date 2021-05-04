'use strict';

let tableEl = document.createElement('table');
let CitiesObjectsArray = [];
let allCitiesDailyTotal = [];
let activeHours = ['6am - 7am', '7am - 8am', '8am - 9am', '9am - 10am', '10am - 11am', '11am - 12pm', '12pm - 1pm', '1pm - 2pm', '2pm - 3pm', '3pm - 4pm', '4pm - 5pm', '5pm - 6pm', '6pm - 7pm', '7pm - 8pm'];

function setUpBasicTableWithTime() {
  let divEl = document.getElementById('container');
  divEl.appendChild(tableEl);
  let tableRowEl = document.createElement('tr');
  tableEl.appendChild(tableRowEl);
  tableRowEl.setAttribute('class', 'tableHeader');

  let tableEmptyEl = document.createElement('td');
  tableRowEl.appendChild(tableEmptyEl);
  tableEmptyEl.setAttribute('class', 'tableHeader');

  for (let i = 0; i < activeHours.length; i++) {
    let tdEl = document.createElement('td');
    tableRowEl.appendChild(tdEl);
    tdEl.textContent = activeHours[i];
    tdEl.setAttribute('class', 'tableHeader');
  }

  let tdEl = document.createElement('td');
  tableRowEl.appendChild(tdEl);
  tdEl.textContent = 'Daily Location Total';
  tdEl.setAttribute('class', 'tableHeader');
}

function CityShop(cityName, minCustPHour, maxCustPHour, avgCookiesPCust) {
  this.cityName = cityName;
  this.minCustPHour = minCustPHour;
  this.maxCustPHour = maxCustPHour;
  this.avgCookiesPCust = avgCookiesPCust;
  this.totalCookies = 0;
  this.activeHours = ['6am - 7am', '7am - 8am', '8am - 9am', '9am - 10am', '10am - 11am', '11am - 12pm', '12pm - 1pm', '1pm - 2pm', '2pm - 3pm', '3pm - 4pm', '4pm - 5pm', '5pm - 6pm', '6pm - 7pm', '7pm - 8pm'];
  this.randomCustPHour = [];
  this.avgCookiesPHour = [];
  CitiesObjectsArray.push(this);
}
CityShop.prototype.randomCustNumFunction = function () {
  for (let i = 0; i < this.activeHours.length; i++) {
    this.randomCustPHour.push(Math.floor(Math.random() * (this.maxCustPHour - this.minCustPHour + 1) + this.minCustPHour));
  }
};
CityShop.prototype.randomCookiesNumFunctionPlusTotal = function () {
  for (let i = 0; i < this.activeHours.length; i++) {
    this.avgCookiesPHour.push(Math.ceil(this.randomCustPHour[i] * this.avgCookiesPCust));
    this.totalCookies += this.avgCookiesPHour[i];

  }
  allCitiesDailyTotal.push(this.totalCookies);
};
CityShop.prototype.renderFunction = function () {
  let tableRowEl = document.createElement('tr');
  tableEl.appendChild(tableRowEl);

  let tableNameEl = document.createElement('td');
  tableRowEl.appendChild(tableNameEl);
  tableNameEl.textContent = this.cityName;

  for (let i = 0; i < this.avgCookiesPHour.length; i++) {
    let tableDataEl = document.createElement('td');
    tableRowEl.appendChild(tableDataEl);
    tableDataEl.textContent = this.avgCookiesPHour[i];
  }
  let tableTotalEl = document.createElement('td');
  tableRowEl.appendChild(tableTotalEl);
  tableTotalEl.textContent = this.totalCookies;
};

function allCitiesTotalPHour() {
  let totalRowEl = document.createElement('tr');
  tableEl.appendChild(totalRowEl);

  let totalRowDataEl = document.createElement('td');
  totalRowEl.appendChild(totalRowDataEl);
  totalRowDataEl.textContent = 'Total';



  for (let z = 0; z < activeHours.length; z++) {
    let totalFooterEl = document.createElement('td');
    totalRowEl.appendChild(totalFooterEl);
    let footerTotal = 0;
    for (let i = 0; i < CitiesObjectsArray.length; i++) {
      footerTotal = footerTotal + CitiesObjectsArray[i].avgCookiesPHour[z];
      totalFooterEl.textContent = footerTotal;

      // allCitiesDailyTotal.push(footerTotal)
    }
  }

  let dailyTotalAllCitiesEl = document.createElement('td');
  totalRowEl.appendChild(dailyTotalAllCitiesEl);

  let dailyTotalAllCitiesText = 0;
  for (let i = 0; i < allCitiesDailyTotal.length; i++) {
    dailyTotalAllCitiesText = dailyTotalAllCitiesText + allCitiesDailyTotal[i];
  }

  dailyTotalAllCitiesEl.textContent = dailyTotalAllCitiesText;

}

setUpBasicTableWithTime();

let seattle = new CityShop('seattle', 23, 65, 6.3);
seattle.randomCustNumFunction();
seattle.randomCookiesNumFunctionPlusTotal();
seattle.renderFunction();
console.log(seattle.totalCookies);

let Tokyo = new CityShop('Tokyo', 3, 24, 1.2);
Tokyo.randomCustNumFunction();
Tokyo.randomCookiesNumFunctionPlusTotal();
Tokyo.renderFunction();

let Dubai = new CityShop('Dubai', 11, 38, 3.7);
Dubai.randomCustNumFunction();
Dubai.randomCookiesNumFunctionPlusTotal();
Dubai.renderFunction();

let Paris = new CityShop('Paris', 20, 38, 2.3);
Paris.randomCustNumFunction();
Paris.randomCookiesNumFunctionPlusTotal();
Paris.renderFunction();

let Lima = new CityShop('Lima', 2, 16, 4.6);
Lima.randomCustNumFunction();
Lima.randomCookiesNumFunctionPlusTotal();
Lima.renderFunction();

allCitiesTotalPHour();
console.log(CitiesObjectsArray);
