import { Component, OnInit } from '@angular/core';
import { Water } from '../water';

@Component({
  selector: 'app-water',
  templateUrl: './water.component.html',
  styleUrls: ['./water.component.css']
})
export class WaterComponent implements OnInit {
  waters: Water[] = [
    new Water('Desert Breeze', 'Sand', 4),
  ];

  constructor() { }

  ngOnInit() {
  }

}
