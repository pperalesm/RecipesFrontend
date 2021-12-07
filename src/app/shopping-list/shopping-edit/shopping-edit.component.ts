import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) form: NgForm;
  editSubscription: Subscription;
  editMode: boolean = false;
  editedIngredientIndex: number;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.editSubscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedIngredientIndex = index;
        this.form.setValue({
          name: this.shoppingListService.getIngredient(index).name,
          amount: this.shoppingListService.getIngredient(index).amount,
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.editSubscription.unsubscribe();
  }

  onSubmit() {
    if (this.editMode) {
      this.shoppingListService.updateIngredient(
        this.editedIngredientIndex,
        new Ingredient(this.form.value.name, this.form.value.amount)
      );
    } else {
      this.shoppingListService.addIngredient(
        new Ingredient(this.form.value.name, this.form.value.amount)
      );
    }
    this.clear();
  }

  onDeleteClick() {
    this.shoppingListService.deleteIngredient(this.editedIngredientIndex);
    this.clear();
  }

  clear() {
    this.editMode = false;
    this.form.reset();
  }
}
