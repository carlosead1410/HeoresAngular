import { Component } from '@angular/core';
import {HeroesService, Heroes} from '../../services/heroes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})

export class HeroesComponent {
  heroes:Heroes[]=[];

  constructor(private _heroesService: HeroesService,
              private router:Router) {
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe(idx:number){
    this.router.navigate(['/heroe',idx]);
  }
}
