import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { Hero }        from './hero';
import { HeroService } from './hero.service';
import {CategoryPipe} from './category.pipe';
import { Pipe } from '@angular/core';
@Component({  
  selector: 'my-dashboard',

  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
  
})
export class DashboardComponent implements OnInit {
  heroes: Hero[]=[]

  constructor(private heroService: HeroService,private http:Http) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1,5));
  }
}
    