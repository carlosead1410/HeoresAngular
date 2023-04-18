import { Component } from '@angular/core';
import {HeroesService, Heroes} from '../../services/heroes.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})

export class HeroesComponent {
  heroes:Heroes[]=[];

  constructor(private _heroesService: HeroesService) {
    this.heroes = this._heroesService.getHeroes();
  }

}
