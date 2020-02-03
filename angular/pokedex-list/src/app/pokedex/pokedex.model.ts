import { PokemonModel } from '../pokemon/pokemon.model';

export class PokedexModel {
    public pokemons: Array<PokemonModel>;

    constructor(pokemons) {
        this.pokemons = pokemons;
    }
}
