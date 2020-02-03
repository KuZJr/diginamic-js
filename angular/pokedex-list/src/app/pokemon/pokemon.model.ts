export enum Type {
    Feu, Plante, Eau, Electrique, Poison, Vol
}

export class PokemonModel {
    specie: string;
    description: string;
    types: Array<Type>;

    constructor({specie, description, types}) {
        this.specie = specie;
        this.description = description;
        this.types = types;
    }
}
