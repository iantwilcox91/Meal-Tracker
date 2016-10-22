import { Component } from '@angular/core'
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <food-list [ateThisFood]="masterMealList"></food-list>
  </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
    new Meal("Hamburger", "Didn't get a soda or cheese on my burger!", 354 ),
    new Meal("Fries", "I only ate half of them.", 365 )
  ];
}
