import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PokemonModel } from './pokemon.model';

@Component({
  selector: 'pkd-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input() pokemon: PokemonModel;
  @Output() pkmnHovered: EventEmitter<PokemonModel> = new EventEmitter();
  @Output() pkmnUnHovered: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  enter() {
    this.pkmnHovered.emit(this.pokemon);
  }

  leave() {
    this.pkmnUnHovered.emit();
  }

}
