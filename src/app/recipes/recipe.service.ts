import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Cookie',
      'Homemade chocolate chip cookie',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN5gcF6LEvTIVbUcMs7OrfhAsXqM2q6D2zYQ&usqp=CAU',
      [new Ingredient('1st ingredient', 3), new Ingredient('2nd ingredient', 2)]
    ),
    new Recipe(
      'Another cookie',
      'Homemade chocolate chip cookie, but different',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT10FC0F8Z7Xgw-dX7nPKoRA5lYSXUCay8KAQ&usqp=CAU',
      [
        new Ingredient('3rd ingredient', 151),
        new Ingredient('4th ingredient', 2945),
      ]
    ),
  ];

  recipesUpdate: Subject<Recipe[]> = new Subject();

  constructor() {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesUpdate.next(this.getRecipes());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesUpdate.next(this.getRecipes());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesUpdate.next(this.getRecipes());
  }
}
