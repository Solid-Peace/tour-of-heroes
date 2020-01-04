import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-hereos',
  templateUrl: './hereos.component.html',
  styleUrls: ['./hereos.component.scss']
})
export class HereosComponent implements OnInit {

  heroes: Hero[];
  /*
  selectedHero: Hero;

  onSelect(hero: Hero): void {
  	this.selectedHero = hero;
  }
  */
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes)
  }

  add(name: string, pv, locution: string): void {
    name = name.trim();
    locution = locution.trim();
    pv = parseInt(pv);
    
    if (!name || !locution || !pv) { return; }
    this.heroService.addHero({ name, pv, locution } as Hero)
    .subscribe(hero => {
      this.heroes.push(hero);
    });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
