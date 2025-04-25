import { Component, OnInit } from '@angular/core';
import { Coffee } from '../../models/coffee';
import { CoffeeService } from '../../services/coffee-service/coffee.service';

@Component({
  selector: 'app-coffee-list',
  standalone: false,
  templateUrl: './coffee-list.component.html',
  styleUrl: './coffee-list.component.css'
})
export class CoffeeListComponent implements OnInit {

  coffeeList?: Array<Coffee>;
  originCoffeCount?: number;
  blendCoffeeCount?: number;

  constructor(private coffeService: CoffeeService) {

  }

  ngOnInit(): void {
    this.loadViewData();
  }

  loadViewData() {
    this.coffeService.listCoffee().subscribe((data) => {
      this.coffeeList = data;
      this.originCoffeCount = this.countTypeOfCoffee("Café de Origen");
      this.blendCoffeeCount = this.countTypeOfCoffee("Blend");
    });
  }

  countTypeOfCoffee(coffeeType: string): number {
    let count = 0;

    this.coffeeList?.forEach(x => {
      if (x.tipo == coffeeType) {
        count++;
      }
    });

    return count;
  }

}
