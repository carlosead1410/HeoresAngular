import { Component } from '@angular/core';
import {HeroesService, Heroes} from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-heroes-busqueda',
  templateUrl: './heroes-busqueda.component.html',
})
export class HeroesBusquedaComponent {
  heroes:Heroes[]=[];

  constructor(private _heroesService: HeroesService,
              private router:Router,
              private activatedRoute:ActivatedRoute,) {
    this.heroes = this._heroesService.getHeroes();
    this.activatedRoute.params.subscribe(params =>{
      console.log(params['term']);
      this.heroes = this._heroesService.buscarHeroes(params['term']);
    });
  }

  verHeroe(idx:number){
    this.router.navigate(['/heroe',idx]);
  }
}

