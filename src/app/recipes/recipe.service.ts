import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected: EventEmitter<Recipe> = new EventEmitter();

  private recipes: Recipe[] = [
    new Recipe(
      'Cookie',
      'Homemade chocolate chip cookie',
      'https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg',
      [new Ingredient('1st ingredient', 3), new Ingredient('2nd ingredient', 2)]
    ),
    new Recipe(
      'Another cookie',
      'Homemade chocolate chip cookie, but different',
      'https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg',
      [
        new Ingredient('3rd ingredient', 151),
        new Ingredient('4th ingredient', 2945),
      ]
    ),
  ];

  constructor() {}

  getRecipes() {
    return this.recipes.slice();
  }
}
