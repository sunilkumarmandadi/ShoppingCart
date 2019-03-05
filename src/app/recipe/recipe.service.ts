import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingrediant } from '../shared/ingrediants.model';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipe: Recipe;
  recipeSelected = new Subject<any>();
  recipeAdded = new Subject();
  revipeSave = new Subject();


  constructor(private http: Http) {}

  private recepies: Recipe[];

  fetchIngrediantsById(id: number) {
    // this.getRecipes.subscribe(
    //   response => {this.recepies = response ; }
    // );
    return this.recepies.slice()[id];
  }
  SaveRecipe(recipe: Recipe) {
    return this.http.post(
      'http://localhost:3000/recipes',
      recipe
    );
  }
  getRecipesFromDB() {
  // return this.http.get('https://sunil-ng-project.firebaseio.com/recipes.json')
  return this.http.get('http://localhost:3000/recipes')
  .pipe(map(( x: Response) => x.json() ))
  .subscribe(
    (response: Recipe[]) => {
      this.setRecipes(response);
    }
  );
  }
setRecipes(recipes: Recipe[]) {
  this.recepies = recipes;
  this.recipeAdded.next(this.recepies);
}



}
