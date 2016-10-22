import { Component, Input } from '@angular/core';
import { Meal } from './meal.model';


@Component({
  selector: 'food-list',
  template: `
  <h3>Here is what i ate today</h3>
  <hr />
  <div *ngFor="let currentFood of ateThisFood">
    <meal-display [meal]="currentTask"></meal-display>
  </div>
  `
})

export class FoodListComponent {
  @Input() ateThisFood: Meal[];
}
