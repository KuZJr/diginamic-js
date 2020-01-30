const axios = require("axios");
const myclass = require("./planet");
// https://swapi.co/api/planets
let planets = [];

axios.get('https://swapi.co/api/planets')
.then(function (response) {
    for (let i = 0; i < response.data.results.length; ++i) {
        let planet = new myclass.Planet(response.data.results[i]);
        planets.push(planet);
    }
    
    for (let i = 0; i < planets.length; ++i) {
        console.log(`Planet "${planets[i].name}" - Population : ${planets[i].population}`);
    }
    
    console.log("Total population : " + myclass.Planet.countPlanetsPopulation(planets));
})
.catch(function (error) {
    console.log(error);
});