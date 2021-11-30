import { EventEmitter, Injectable } from '@angular/core';

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
      'https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg'
    ),
    new Recipe(
      'Another cookie',
      'Homemade chocolate chip cookie, but different',
      'https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg'
    ),
  ];

  constructor() {}

  getRecipes() {
    return this.recipes.slice();
  }
}
