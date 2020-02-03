import { Component, OnInit } from '@angular/core';
import data from './pokemon.data';
import { PokedexModel } from './pokedex.model';
import { PokemonModel } from '../pokemon/pokemon.model';

@Component({
  selector: 'pkd-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  pokedex: PokedexModel = new PokedexModel(new Array());
  pkmnHover: string;

  constructor() {
    let pokemons = data;
    pokemons.forEach(element => {
      this.pokedex.pokemons.push(element);
    });
    this.pkmnHover = '';
  }

  ngOnInit() {
  }

  pkmnHovered(pokemon: PokemonModel) {
    this.pkmnHover = pokemon.specie;
  }

  pkmnUnHovered() {
    this.pkmnHover = '';
  }

}
