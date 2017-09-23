import { Injectable }    from '@angular/core';
import { Headers, Http,Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';
import { Hero } from './hero';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class HeroService {

  private heroesUrl = './asset/file.json';  // URL to web api

  constructor(private http: Http) { }

  getHeroes():Observable<Hero[]> {
    return this.http.get('./asset/file.json')
     .map(this.extractData)
  }

  extractData( response : Response){
    let body = response.json();
    
    return body || [];
  }
heroes:any;
 getHero(id: number): Promise<Hero> {
    return this.getHeroe()
               .then(heroes => heroes.find(hero => hero.id === id));
  }

 getHeroe(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
     .toPromise()
    .then((response) => response.json())
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

