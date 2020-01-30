const axios = require("axios");
const myclass = require("./planet");
// https://swapi.co/api/planets
let planets = [];
let url = 'https://swapi.co/api/planets';
let page = true;

async function SWPop() {
    while (page == true) {
        await axios.get(url)
        .then(function (response) {
            for (let i = 0; i < response.data.results.length; ++i) {
                let planet = new myclass.Planet(response.data.results[i]);
                planets.push(planet);
            }
            if (response.data.next != null)
                url = response.data.next;
            else
                page = false;
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    for (let i = 0; i < planets.length; ++i) {
        console.log(`Planet "${planets[i].name}" - Population : ${planets[i].population}`);
    }
    
    console.log("Total population : " + myclass.Planet.countPlanetsPopulation(planets));
}

SWPop();