import { Component, Input } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  template: `
  <div>
  <p>Meals will go here</p>
  </div>
    `
  })
  export class MealComponent {
    @Input() meal: Meal;
  }
