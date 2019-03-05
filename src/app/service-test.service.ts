import { Injectable } from '@angular/core';
import { Recipe } from './recipe/recipe.model';
import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceTestService {
storage: Recipe;
recepies: Recipe[];
rrr: any;
recipeAdded = new Subject();
testbehaviorSubject = new BehaviorSubject<any>('test');
recipeSelected = new ReplaySubject<any>(3);
testReplaySubject = new ReplaySubject<any>(1);
  constructor(private http: Http) { }

  getRecipesFromDB() {
    return this.http.get('http://localhost:3000/recipes')
    .pipe(map(( x: Response) => x.json() ))
    .subscribe(
      (response: Recipe[]) => {
        this.recepies = response;
        this.rrr = response;
    this.recipeAdded.next(this.recepies);
      }
    );
    }

  SaveRecipe(recipe: Recipe) {
      this.recepies.push(recipe);
      this.recipeAdded.next(this.recepies);
      this.testbehaviorSubject.next(recipe);
      this.testReplaySubject.next(recipe);
      return this.http.post(
        'http://localhost:3000/recipes',
        recipe
      );
    }
  setRecipe(data: Recipe) {
    this.storage = data;
  }
  DeleteRecipe(id: number) {
    return this.http.delete('http://localhost:3000/recipes/' + id)
    .subscribe(
      (resp) => {
       this.getRecipesFromDB();
        // this.recepies.splice(id, 1);
        // const s = this.recepies;
        // this.recipeAdded.next(this.recepies);
      }
    );
  }
  fetchIngrediantsById(id: number): Recipe {
    this.getRecipesFromDB();
    const ss = this.recepies.filter( x =>  x.id === id  )[0];
    return ss;
  }
  UpdateRecipe(id: number, recipe: Recipe) {
    this.http.put(`http://localhost:3000/recipes/${id}`, recipe).subscribe(
      x => { this.getRecipesFromDB(); },
      error => {
        console.log(error);
       }

    );

  }

getRecipe() {
return this.storage;
}
}
