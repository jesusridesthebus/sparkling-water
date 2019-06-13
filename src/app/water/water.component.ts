import { Component, OnInit } from '@angular/core';
import { Water } from '../water';

@Component({
  selector: 'app-water',
  templateUrl: './water.component.html',
  styleUrls: ['./water.component.css']
})
export class WaterComponent implements OnInit {

  water: Water = {
    id: 1,
    brand: 'Desert Breeze',
    flavor: 'Sand',
    price: 4,
    pints_left: 124
  };

  constructor() { }

  ngOnInit() {
  }

}
