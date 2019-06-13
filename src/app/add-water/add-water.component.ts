import { Component, Output, EventEmitter } from '@angular/core';
import { Water } from '../water';

@Component({
  selector: 'app-add-water',
  templateUrl: './add-water.component.html',
  styleUrls: ['./add-water.component.css']
})
export class NewWaterComponent {
  @Output() sendWater = new EventEmitter();

  submitForm(brand: string, flavor: string, price: number) {
    let newWater: Water = new Water(brand, flavor, price);
  }

  constructor() { }

  ngOnInit() {
  }

}
