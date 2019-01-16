'use strict';

var time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// Compressing logic and creating a new lab branch

var allPlaces = [];

var locationTable = document.getElementById('Cookies');

var cookiesTot = 0;

var hourlyTot = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function locationS(location, minCustomers, maxCustomers, avgcookieSales){
    this.location = location;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgcookieSales = avgcookieSales;
    this.salesTot = 0;
    this.salmons = [];
    allPlaces.push(this);
}

new locationS('Pike Place', 23, 65, 6.3);
new locationS('SeaTac', 3, 24, 1.2);
new locationS('SeaCenter', 11, 38, 3.7);
new locationS('CapHill', 20, 38, 2.3);
new locationS('Alki', 2, 16, 4.6);


locationS.prototype.cookieSales = function(){
    for(var i = 0; i < time.length; i++){
        function getRandomInt(min, max) {
        return Math.ceil(Math.random() * (max - min)) + min;
        }
        this.salmons.push(Math.ceil(getRandomInt(this.minCustomers, this.maxCustomers) * this.avgcookieSales));
        cookiesTot = cookiesTot + this.salmons[i];
        hourlyTot[i] = hourlyTot[i] + this.salmons[i];
        this.salesTot = this.salesTot + this.salmons[i]
    }
}

locationS.prototype.render = function() {
    var trEl = document.createElement('tr');
        var tdEl = document.createElement('td');
            tdEl.textContent = this.location
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
}

makeHeaderRow();

for(var i = 0; i < allPlaces.length; i++){
    allPlaces[i].cookieSales();
    allPlaces[i].render();
}

makeFooterRow();
//console.table(allPlaces);

function makeHeaderRow(){
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th')

        thEl.textContent = "";
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
    var tdEl = document.createElement('td')

        tdEl.textContent = "Total Sales";
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

function renderAllPlaces(){
    for(var i = 0; i < allPlaces.length; i++)
        allPlaces[i].render();
}

// var pikeplaceUl = document.getElementById('pikeplaceUl');

// var seatacUl = document.getElementById('seatacUl');

// var seacenterUl = document.getElementById('seaCenterUl');

// var caphillUl = document.getElementById('capHillUl');

// var alkiUl = document.getElementById('AlkiUl');

// function getRandomInt(min, max) {
//         return Math.floor(Math.random() * (max - min)) + min;
//       }


// var pikeUl = {
//     location: 'PikePlace',
//     minCustomers: 23,
//     maxCustomers: 65,
//     avgcookieSales: 6.3,
    
//     render: function() {
//         var cookiesTot = 0;
//     for (var i = 0; i < time.length; i++) {

//         var liEl = document.createElement('li');
//             console.log('just created liEl', liEl);
        
//         var avgCust = getRandomInt(this.minCustomers, this.maxCustomers);
//         var avgCust = Math.floor (avgCust * this.avgcookieSales);

//         liEl.textContent = `${time[i]}: ${avgCust}cookies`;
//             console.log('just assigned a value to liEl', liEl);
        
//         cookiesTot = cookiesTot + avgCust;
//         pikeplaceUl.appendChild(liEl);
//         }
//         var liOl = document.createElement('li');
//         liOl.textContent = `Total: ${cookiesTot} cookies`;
//         pikeplaceUl.appendChild(liOl);
//     }
// }
// pikeUl.render();


// var seaTacUl = {
//     location: 'SeaTac',
//     minCustomers: 3,
//     maxCustomers: 24,
//     avgcookieSales: 1.2,

//     render: function() {
//         var cookiesTot = 0;
//     for (var i = 0; i < time.length; i++) {
        
//         var liEl = document.createElement('li');
//             console.log('just created liEl', liEl);
    
//         var avgCust = getRandomInt(this.minCustomers, this.maxCustomers);
//         var avgCust = Math.floor (avgCust * this.avgcookieSales);

//         liEl.textContent = `${time[i]}: ${avgCust}cookies`;
//             console.log('just assigned a value to liEl', liEl);
    
//         cookiesTot = cookiesTot + avgCust;
//         seatacUl.appendChild(liEl);
//         }
//         var liOl = document.createElement('li');
//         liOl.textContent = `Total: ${cookiesTot} cookies`;
//         seatacUl.appendChild(liOl);
//     }
// }
// seaTacUl.render();


// var seacenterUl = {
//     location: 'SeaCenter',
//     minCustomers: 11,
//     maxCustomers: 38,
//     avgcookieSales: 3.7,

//     render: function() {
//         var cookiesTot = 0;
//     for (var i = 0; i < time.length; i++) {
        
//         var liEl = document.createElement('li');
//             console.log('just created liEl', liEl);
    
//         var avgCust = getRandomInt(this.minCustomers, this.maxCustomers);
//         var avgCust = Math.floor (avgCust * this.avgcookieSales);

//         liEl.textContent = `${time[i]}: ${avgCust}cookies`;
//             console.log('just assigned a value to liEl', liEl);
    
//         cookiesTot = cookiesTot + avgCust;
//         seaCenterUl.appendChild(liEl);
//         }
//         var liOl = document.createElement('li');
//         liOl.textContent = `Total: ${cookiesTot} cookies`;
//         seaCenterUl.appendChild(liOl);
//     }
// }
// seacenterUl.render();


// var caphillUl = {
//     location: 'CapHill',
//     minCustomers: 20,
//     maxCustomers: 38,
//     avgcookieSales: 2.3,

//     render: function() {
//         var cookiesTot = 0;
//     for (var i = 0; i < time.length; i++) {

//         var liEl = document.createElement('li');
//             console.log('just created liEl', liEl);
        
//         var avgCust = getRandomInt(this.minCustomers, this.maxCustomers);
//         var avgCust = Math.floor (avgCust * this.avgcookieSales);

//         liEl.textContent = `${time[i]}: ${avgCust}cookies`;
//             console.log('just assigned a value to liEl', liEl);
        
//         cookiesTot = cookiesTot + avgCust;
//         capHillUl.appendChild(liEl);
//         }
//         var liOl = document.createElement('li');
//         liOl.textContent = `Total: ${cookiesTot} cookies`;
//         capHillUl.appendChild(liOl);
//     }
// }
// caphillUl.render();

// var alkiUl = {
//     location: 'Alki',
//     minCustomers: 2,
//     maxCustomers: 16,
//     avgcookieSales: 4.6,

//     render: function() {
//         var cookiesTot = 0;
//     for (var i = 0; i < time.length; i++) {

//         var liEl = document.createElement('li');
//             console.log('just created liEl', liEl);
    
//         var avgCust = getRandomInt(this.minCustomers, this.maxCustomers);
//         var avgCust = Math.floor (avgCust * this.avgcookieSales);

//         liEl.textContent = `${time[i]}: ${avgCust}cookies`;
//             console.log('just assigned a value to liEl', liEl);
    
//         cookiesTot = cookiesTot + avgCust;
//         AlkiUl.appendChild(liEl);
//         }
//         var liOl = document.createElement('li');
//         liOl.textContent = `Total: ${cookiesTot} cookies`;
//         AlkiUl.appendChild(liOl);
//     }
// }
// alkiUl.render();

