import { Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Chocolate', 3),
    new Ingredient('Flour', 1),
  ];

  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }
}
