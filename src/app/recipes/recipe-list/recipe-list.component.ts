import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  recipesUpdateSubscription: Subscription;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
    this.recipesUpdateSubscription = this.recipeService.recipesUpdate.subscribe(
      (recipes) => {
        this.recipes = recipes;
      }
    );
  }

  ngOnDestroy(): void {
    this.recipesUpdateSubscription.unsubscribe();
  }
}
