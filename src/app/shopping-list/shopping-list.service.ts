import { Ingrediant } from '../shared/ingrediants.model';
import { EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';

export class ShoppingListService {
ingrediantAdded = new EventEmitter<Ingrediant[]>();
recipeSelected = new EventEmitter<Recipe>();

  private ingrediants: Ingrediant[] = [
    new Ingrediant('Apples', 2),
    new Ingrediant('Tamatos', 3),
    new Ingrediant('Chilli', 4)
    ];

    getShoppingList() {
      return this.ingrediants.slice();
    }
    addIngrediant(ingrediant: Ingrediant) {
      this.ingrediants.push(ingrediant);
      this.ingrediantAdded.emit(this.ingrediants.slice());
    }
    callEventEmitter(recipe: Recipe) {
  this.recipeSelected.emit(recipe);
    }
}
