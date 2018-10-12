
import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingrediant } from '../shared/ingrediants.model';

export class RecipeService {

   recipeSelected = new EventEmitter<Recipe>();

  private recepies: Recipe[] = [
    new Recipe('Shrimp', 'delicious Shrimp curry',
    'https://c1.staticflickr.com/6/5737/30622968353_35e06fcb52_b.jpg',
    [new Ingrediant('shrimp', 12), new Ingrediant('salad', 1)] ),
    new Recipe('Cake', 'delicious Cake',
    'https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%' +
    '2F579859199_1280x960.jpg&src1=https%3A%2F%2Ff.vimeocdn.com%2Fimages_v6%2Fshare%2Fplay_icon_overlay.png',
    [new Ingrediant('all purpose floor', 1), new Ingrediant('sugar', 12)]  ),
    new Recipe('Avacado', 'delicious Avacado Recipe',
    'http://res.publicdomainfiles.com/pdf_view/2/13494127215552.jpg',
    [new Ingrediant('avacado', 3), new Ingrediant('onion', 1)] )

  ];

  getRecipes() {
    return this.recepies.slice(); // slice returns the copy of the list. Not the original list.
  }
  callEventEmitter(recipe: Recipe) {
this.recipeSelected.emit(recipe);

  }
}
