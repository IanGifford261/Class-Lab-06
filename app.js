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

var pikeplaceUl = document.getElementById('pikeplaceUl');

var seatacUl = document.getElementById('seatacUl');

var seacenterUl = document.getElementById('seaCenterUl');

var caphillUl = document.getElementById('capHillUl');

var alkiUl = document.getElementById('AlkiUl');

function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }


var pikeUl = {
    location: 'PikePlace',
    minCusomters: 23,
    maxCustomers: 65,
    avgcookieSales: 6.3,
    
    render: function() {
        var cookiesTot = 0;
    for (var i = 0; i < time.length; i++) {

        var liEl = document.createElement('li');
            console.log('just created liEl', liEl);
        
        var avgCust = getRandomInt(this.minCusomters, this.maxCustomers);
        var avgCust = Math.floor (avgCust * this.avgcookieSales);

        liEl.textContent = `${time[i]}: ${avgCust}cookies`;
            console.log('just assigned a value to liEl', liEl);
        
        cookiesTot = cookiesTot + avgCust;
        pikeplaceUl.appendChild(liEl);
        }
        var liOl = document.createElement('li');
        liOl.textContent = `Total: ${cookiesTot} cookies`;
        pikeplaceUl.appendChild(liOl);
    }
}
pikeUl.render();


var seaTacUl = {
    location: 'SeaTac',
    minCusomters: 3,
    maxCustomers: 24,
    avgcookieSales: 1.2,

    render: function() {
        var cookiesTot = 0;
    for (var i = 0; i < time.length; i++) {
        
        var liEl = document.createElement('li');
            console.log('just created liEl', liEl);
    
        var avgCust = getRandomInt(this.minCusomters, this.maxCustomers);
        var avgCust = Math.floor (avgCust * this.avgcookieSales);

        liEl.textContent = `${time[i]}: ${avgCust}cookies`;
            console.log('just assigned a value to liEl', liEl);
    
        cookiesTot = cookiesTot + avgCust;
        seatacUl.appendChild(liEl);
        }
        var liOl = document.createElement('li');
        liOl.textContent = `Total: ${cookiesTot} cookies`;
        seatacUl.appendChild(liOl);
    }
}
seaTacUl.render();


var seacenterUl = {
    location: 'SeaCenter',
    minCusomters: 11,
    maxCustomers: 38,
    avgcookieSales: 3.7,

    render: function() {
        var cookiesTot = 0;
    for (var i = 0; i < time.length; i++) {
        
        var liEl = document.createElement('li');
            console.log('just created liEl', liEl);
    
        var avgCust = getRandomInt(this.minCusomters, this.maxCustomers);
        var avgCust = Math.floor (avgCust * this.avgcookieSales);

        liEl.textContent = `${time[i]}: ${avgCust}cookies`;
            console.log('just assigned a value to liEl', liEl);
    
        cookiesTot = cookiesTot + avgCust;
        seaCenterUl.appendChild(liEl);
        }
        var liOl = document.createElement('li');
        liOl.textContent = `Total: ${cookiesTot} cookies`;
        seaCenterUl.appendChild(liOl);
    }
}
seacenterUl.render();


var caphillUl = {
    location: 'CapHill',
    minCusomters: 20,
    maxCustomers: 38,
    avgcookieSales: 2.3,

    render: function() {
        var cookiesTot = 0;
    for (var i = 0; i < time.length; i++) {

        var liEl = document.createElement('li');
            console.log('just created liEl', liEl);
        
        var avgCust = getRandomInt(this.minCusomters, this.maxCustomers);
        var avgCust = Math.floor (avgCust * this.avgcookieSales);

        liEl.textContent = `${time[i]}: ${avgCust}cookies`;
            console.log('just assigned a value to liEl', liEl);
        
        cookiesTot = cookiesTot + avgCust;
        capHillUl.appendChild(liEl);
        }
        var liOl = document.createElement('li');
        liOl.textContent = `Total: ${cookiesTot} cookies`;
        capHillUl.appendChild(liOl);
    }
}
caphillUl.render();

var alkiUl = {
    location: 'Alki',
    minCusomters: 2,
    maxCustomers: 16,
    avgcookieSales: 4.6,

    render: function() {
        var cookiesTot = 0;
    for (var i = 0; i < time.length; i++) {

        var liEl = document.createElement('li');
            console.log('just created liEl', liEl);
    
        var avgCust = getRandomInt(this.minCusomters, this.maxCustomers);
        var avgCust = Math.floor (avgCust * this.avgcookieSales);

        liEl.textContent = `${time[i]}: ${avgCust}cookies`;
            console.log('just assigned a value to liEl', liEl);
    
        cookiesTot = cookiesTot + avgCust;
        AlkiUl.appendChild(liEl);
        }
        var liOl = document.createElement('li');
        liOl.textContent = `Total: ${cookiesTot} cookies`;
        AlkiUl.appendChild(liOl);
    }
}
alkiUl.render();


