import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { DataService } from './dataservice';
import { Hero }        from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ],
  providers:[DataService]
})
export class HeroDetailComponent implements OnInit {
  hero: any;

items:any[]=[];
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location,
    private dataService:DataService,
 
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero);
  }

  save(name:string): void {
    this.dataService.addData(name);

 }

show()
{
 this.items= this.dataService.getData();
}

deleteItem(name:string)
{
   this.dataService.deleteMsg(name);
}

  goBack(): void {
    this.location.back();
  }
}
