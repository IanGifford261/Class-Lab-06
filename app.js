'use strict';

// var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// var alkiUl = document.getElementById('');

// var goldenUl = document.getElementById('');

// var edmondsUl = document.getElementById('')

// var alki = {
//     name: 'Alki',
//     neighborhood: 'West Seattle',
//     seagullCount: [212, 44, 34, 11, 18, 88, 377],

//      render: function() {
//         for (var i = 0; i < days.length; i++){
             
                //1. Create element to hold the data

//              var liEl = document.createElement('li');
//              console.log('just created liEl', liEl);

//             //2. Assign the data tothe element
//             liEl.textContent = `${days[i]}: ${this.seagullCount[i]} seagulls`
//             console.log('just assigned a value to liEl', liEl);

//             //3. Put the element into the DOM
//             alkiUl.appendChild(liEl);
//         }
//     }
// }

var time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var pikeplaceUl = document.getElementById('PikePlace');

var seatacUl = document.getElementById('SeaTac');

var seacenterUl = document.getElementById('SeaCenter');

var caphillUl = document.getElementById('CapHill');

var alkiUl = document.getElementById('Alki');



var pikeUl = {
    location: 'PikePlace',
    minCusomters: 23,
    maxCustomers: 65,
    avgcookieSales: 6.3,
    customersPerHour: function getRandomInt (minCustomers, maxCustomers) {
        min = Math.ceil(23);
        max = Math.floor(65);
        return Math.floor(Math.random() * (maxCustomers - minCustomers) + min);
    },
    
    render: function() {
    for (var i = 0; i < time.length; i++) {

        var liEl = document.createElement('li');
            console.log('just created liEl', liEl);

        liEl.textContent = `${time[i]}: ${this.avgcookieSales[i]}cookies`
            console.log('just assigned a value to liEl', liEl);
        
        pikeUl.appendChild(liEl);
        }
    }
}

var seatacUl = {
    location: 'SeaTac',
    minCusomters: 3,
    maxCustomers: 24,
    avgcookieSales: 1.2,

    render: function() {
    for (var i = 0; i < time.length; i++) {

        var liEl = document.createElement('li');
            console.log('just created liEl', liEl);

        liEl.textContent = `${time[i]}: ${this.avgcookieSales[i]}cookies`
            console.log('just assigned a value to liEl', liEl);
        
        seatacUl.appendChild(liEl);
        }
    }
}

var seacenterUl = {
    location: 'SeaCenter',
    minCusomters: 11,
    maxCustomers: 38,
    avgcookieSales: 3.7,

    render: function() {
    for (var i = 0; i < time.length; i++) {

        var liEl = document.createElement('li');
            console.log('just created liEl', liEl);

        liEl.textContent = `${time[i]}: ${this.avgcookieSales[i]}cookies`
            console.log('just assigned a value to liEl', liEl);
        
        seacenterUl.appendChild(liEl);
        }
    }
}

var caphillUl = {
    location: 'CapHill',
    minCusomters: 20,
    maxCustomers: 38,
    avgcookieSales: 2.3,

    render: function() {
    for (var i = 0; i < time.length; i++) {

        var liEl = document.createElement('li');
            console.log('just created liEl', liEl);

        liEl.textContent = `${time[i]}: ${this.avgcookieSales[i]}cookies`
            console.log('just assigned a value to liEl', liEl);
        
        caphillUl.appendChild(liEl);
        }
    }
}

var alkiUl = {
    location: 'Alki',
    minCusomters: 2,
    maxCustomers: 16,
    avgcookieSales: 4.6,

    render: function() {
    for (var i = 0; i < time.length; i++) {

        var liEl = document.createElement('li');
            console.log('just created liEl', liEl);

        liEl.textContent = `${time[i]}: ${this.avgcookieSales[i]}cookies`
            console.log('just assigned a value to liEl', liEl);
        
        alkiUl.appendChild(liEl);
        }
    }
}