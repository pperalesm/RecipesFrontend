import { EventEmitter, Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Chocolate', 3),
    new Ingredient('Flour', 1),
  ];

  ingredientsUpdate: EventEmitter<Ingredient[]> = new EventEmitter();

  constructor() {}

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsUpdate.emit(this.getIngredients());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsUpdate.emit(this.getIngredients());
  }

  deleteIngredient(ingredientToDelete: Ingredient) {
    this.ingredients = this.ingredients.filter(
      (ingredient) => !ingredient.equals(ingredientToDelete)
    );
    this.ingredientsUpdate.emit(this.getIngredients());
  }

  clearIngredients() {
    this.ingredients = [];
    this.ingredientsUpdate.emit(this.getIngredients());
  }
}
