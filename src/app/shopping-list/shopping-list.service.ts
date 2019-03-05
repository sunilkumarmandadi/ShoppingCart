import { Ingrediant } from '../shared/ingrediants.model';
import { EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingrediantAdded = new EventEmitter<Ingrediant[]>();
  recipeSelected = new EventEmitter<Recipe>();

  addUpdateIngrediants = new Subject();
  shoppingLstEditIndex = new Subject();

  private ingrediants: Ingrediant[] = [
    new Ingrediant('Apples', 2),
    new Ingrediant('Tamatos', 3),
    new Ingrediant('Chilli', 4)
  ];

  getShoppingList() {
    return this.ingrediants;
  }
  getShoppingListByIndex(index: number) {
    return this.ingrediants[index];
  }
  updateIngrediants(index: number, ingrediant: Ingrediant) {
    this.ingrediants[index] = ingrediant;
  }
deleteIngrediants(index: number) {
  this.ingrediants.splice(index);
}
  callEventEmitter(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
  addShoppingList(ingrediant: Ingrediant) {
    // ingrediants.forEach(x => {
    //   this.ingrediants.push(x);
    // });
    // this.ingrediants.push(...ingrediants); // To push a list of values
    // this.ingrediantAdded.emit(this.ingrediants);
    this.ingrediants.push(ingrediant);
  }
}
