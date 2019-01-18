'use strict';

var time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var allPlaces = [];
var locationTable = document.getElementById('Cookies');
var cookiesTot = 0;
var hourlyTot = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var formL = document.getElementById('new-location');

function locationS(location, minCustomers, maxCustomers, avgcookieSales){
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgcookieSales = avgcookieSales;
  this.salesTot = 0;
  this.salmons = [];

  //this.cookieSales();
  allPlaces.push(this);
}

function iHateLife(){
  allPlaces[allPlaces.length - 1].cookieSales();
  for(var i = 0; i < allPlaces.length; i++){
    allPlaces[i].render();
  }
}


function getRandomInt(min, max) {
  return Math.ceil(Math.random() * (max - min)) + min;
}


new locationS('Pike Place', 23, 65, 6.3);
new locationS('SeaTac', 3, 24, 1.2);
new locationS('SeaCenter', 11, 38, 3.7);
new locationS('CapHill', 20, 38, 2.3);
new locationS('Alki', 2, 16, 4.6);


locationS.prototype.cookieSales = function(){
  for(var i = 0; i < time.length; i++){
    this.salmons.push(Math.ceil(getRandomInt(this.minCustomers, this.maxCustomers) * this.avgcookieSales));
    cookiesTot = cookiesTot + this.salmons[i];
    hourlyTot[i] = hourlyTot[i] + this.salmons[i];
    this.salesTot = this.salesTot + this.salmons[i];

  }
};

locationS.prototype.render = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.location;
  trEl.appendChild(tdEl);

  for(var i = 0; i < time.length; i++){
    tdEl = document.createElement('td');
    tdEl.textContent = this.salmons[i];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = this.salesTot;
  trEl.appendChild(tdEl);
  locationTable.appendChild(trEl);
};

makeHeaderRow();
for(var i = 0; i < allPlaces.length; i++){
  allPlaces[i].cookieSales();
  allPlaces[i].render();
}
makeFooterRow();
//console.table(allPlaces);

function makeHeaderRow(){
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');

  thEl.textContent = '';
  trEl.appendChild(thEl);
  for(var i = 0; i < time.length; i++){

    thEl = document.createElement('th');
    thEl.textContent = time[i];
    trEl.appendChild(thEl);

  }
  thEl = document.createElement('th');
  thEl.textContent = 'Totals';
  trEl.appendChild(thEl);

  locationTable.appendChild(trEl);
}

function makeFooterRow(){
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');

  tdEl.textContent = 'Total Sales';
  trEl.appendChild(tdEl);
  for(var i = 0; i < time.length; i++){

    tdEl = document.createElement('th');
    tdEl.textContent = hourlyTot[i];
    trEl.appendChild(tdEl);

  }
  tdEl = document.createElement('th');
  tdEl.textContent = cookiesTot;
  trEl.appendChild(tdEl);

  locationTable.appendChild(trEl);
}

// eslint-disable-next-line no-unused-vars
//function renderAllPlaces(){
//locationTable.textContent = '';

// for(var i = 0; i < allPlaces.length; i++)
//   allPlaces[i].render();
//}


function inputL(event){
  event.preventDefault();
  console.log('string event triggered');
  var location = event.target.location.value;
  var minCustomers = parseInt(event.target.minCusto.value);
  var maxCustomers = parseInt(event.target.maxCusto.value);
  var avgcookieSales = parseInt(event.target.avgCooky.value);
  new locationS(location, minCustomers, maxCustomers, avgcookieSales);
  renderTable();
}

formL.addEventListener('submit', inputL);

function renderTable(){
  locationTable.innerHTML = '';
  makeHeaderRow();
  iHateLife();
  makeFooterRow();
}


