import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './Hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
  	const heroes = [
  		{ id: 1, name: 'Peon', pv: 100, locution: 'Encore du travail ?'},
		{ id: 2, name: 'VCS', pv: 100, locution: 'Des heures Sup !'},
		{ id: 3, name: 'Marine', pv: 150, locution: 'C\'est partie !'},
		{ id: 4, name: 'Zelote', pv: 300, locution: ''},
		{ id: 5, name: 'Zergling', pv: 50, locution: ''},
		{ id: 6, name: 'Maraudeur', pv: 300, locution: ''},
		{ id: 7, name: 'Cafard', pv: 300, locution: ''},
		{ id: 8, name: 'Pheonix', pv: 200, locution: ''},
		{ id: 9, name: 'Cuirasser', pv: 900, locution: ''},
		{ id: 10, name: 'Templar', pv: 100, locution: ''},
		{ id: 11, name: 'Hydralisk', pv: 200, locution: ''},
  	];

  	return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

  constructor() { }
}
