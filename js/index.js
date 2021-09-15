const jsonData = [
    {
        "desc": "Thai Yellow Curry Noodles with Shiitake Mushrooms",
        "date": "05-03-2016",
        "country": "THAI",
        "img": "./img/Thainoodles.png"
    },
    {
        "desc": "Cappellini with Cherry and Tomatoes and Fresh Basil",
        "date": "17-03-2016",
        "country": "Italian",
        "img": "./img/CherryAndTomatoes.png"
    },
    {
        "desc": "Baked Turkey Sausage and Mascarpone Stuffed Shells",
        "date": "04-04-2016",
        "country": "Italian",
        "img": "./img/BakedTurkey.png"
    },
    {
        "desc": "Caramelised Apple and Herb Fiocchi",
        "date": "24-05-2016",
        "country": "Italian",
        "img": "./img/Caramelised Apple.png"
    },
    {
        "desc": "Pumpkin Beer Cheese Soup",
        "date": "25-03-2016",
        "country": "SPANISH",
        "img": "./img/PumpkinBeerSoup.png"
    },
    {
        "desc": "Yum Woon Sen With Shrimp(Glass noodle salad With Shrimp)",
        "date": "22-09-2016",
        "country": "THAI",
        "img": "./img/recipe7.png"
    },
    {
        "desc": "Beef Stay",
        "date": "24-05-2016",
        "country": "THAI",
        "img": "./img/BreadBowl.png"
    },
    {
        "desc": "Creamy French Onion Soup Dip in a Breed Bowl",
        "date": "14-10-2016",
        "country": "Italian",
        "img": "./img/Bites.png"
    },
    {
        "desc": "Bocadillo Bites",
        "date": "11-11-2016",
        "country": "SPANISH",
        "img": "./img/Bites.png"
    },
    {
        "desc": "Paella",
        "date": "12-11-2016",
        "country": "Italian",
        "img": "./img/Paella.png"
    },
    {
        "desc": "Spicy black Bean Burger",
        "date": "24-12-2016",
        "country": "Italian",
        "img": "./img/BlackBeenBurger.png"
    },
    {
        "desc": "Fresh Fig And Pistachio Salad",
        "date": "09-01-2017",
        "country": "Italian",
        "img": "./img/FigSalad.png"
    }
]
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger) {
    hamburger.addEventListener("click", mobileMenu)
};

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = document.getElementsByClassName("collapsble-content")[0];
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}


function changeByFilter() {
    document.getElementById('grid').innerHTML = "";
    var val = document.getElementById("filter").value;
    if (val == 'new') {
        jsonData.sort(function (a, b) {
            var adate = a.date.split("-");
            var bdate = b.date.split("-");
            var dateA = new Date(+adate[2], adate[1] - 1, +adate[0]), dateB = new Date(+bdate[2], bdate[1] - 1, +bdate[0]);
            return dateA - dateB
        });
    } else {
        jsonData.sort(function (a, b) {
            var adate = a.date.split("-");
            var bdate = b.date.split("-");
            var dateA = new Date(+adate[2], adate[1] - 1, +adate[0]), dateB = new Date(+bdate[2], bdate[1] - 1, +bdate[0]);
            return dateB - dateA
        });
    }




    for (var i = 0; i < jsonData.length; i++) {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        // debugger
        let date = jsonData[i].date.split("-");
        let dateA = new Date(+date[2], date[1] - 1, +date[0])
        const dateObj = new Date(dateA);
        const month = monthNames[dateObj.getMonth()];
        const day = String(dateObj.getDate()).padStart(2, '0');
        const year = dateObj.getFullYear();
        const output = day + 'TH \n' + month + '\n' + year;
        let content = `
   <div class="card grid-item">
                            <div class="d-flex items-center content-between grid-lable">
                                <div class="date">${output}</div>
                                <div class="type">${jsonData[i].country}</div>
                            </div>
                            <div class="card-container">
                                <p>${jsonData[i].desc}</p>
                            </div>
                            <img src="${jsonData[i].img}" alt="Avatar" style="width:100%">

                        </div>
  `;
        document.getElementById('grid').innerHTML += content;
    }
}

window.onload = function () {
    changeByFilter();
}


