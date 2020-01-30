class Planet {
    constructor({ name, population }) {
        this.name = name;
        this.population = population;
    }

    static countPlanetsPopulation(planets) {
        let pop = [];
        for (let i = 0; i < planets.length; ++i) {
            if (planets[i].population != 'unknown')
                pop.push(parseInt(planets[i].population, 10));
        }
        return pop.reduce((p, n) => p + n);
    }
}

module.exports. Planet = Planet;