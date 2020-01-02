import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';

@Component({
  selector: 'app-hereos',
  templateUrl: './hereos.component.html',
  styleUrls: ['./hereos.component.scss']
})
export class HereosComponent implements OnInit {

	hero : Hero = {
		id: 1,
		name: 'Peon',
		pv: 100,
		locution : 'Encore du travail ?'
	};


  constructor() { }

  ngOnInit() {
  }

}
