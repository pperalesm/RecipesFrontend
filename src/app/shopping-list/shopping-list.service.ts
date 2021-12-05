import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Chocolate', 3),
    new Ingredient('Flour', 1),
  ];

  ingredientsUpdate: Subject<Ingredient[]> = new Subject();

  constructor() {}

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsUpdate.next(this.getIngredients());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsUpdate.next(this.getIngredients());
  }

  deleteIngredient(ingredientToDelete: Ingredient) {
    this.ingredients = this.ingredients.filter(
      (ingredient) => !ingredient.equals(ingredientToDelete)
    );
    this.ingredientsUpdate.next(this.getIngredients());
  }

  clearIngredients() {
    this.ingredients = [];
    this.ingredientsUpdate.next(this.getIngredients());
  }
}
