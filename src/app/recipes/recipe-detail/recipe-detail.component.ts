import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  recipe: Recipe;
  paramsSubscription: Subscription;

  constructor(
    private recipeService: RecipeService,
    private shoppingListservice: ShoppingListService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.recipe = this.recipeService.getRecipe(+params['id']);
    });
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

  onAddClick() {
    this.shoppingListservice.addIngredients(this.recipe.ingredients);
  }

  onDeleteClick() {
    this.recipeService.deleteRecipe(this.route.snapshot.params['id']);
    this.router.navigate(['recipes']);
  }
}
