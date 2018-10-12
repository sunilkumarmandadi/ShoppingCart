import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { ShoppingListService } from './../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']

})
export class RecipeComponent implements OnInit {
selectedRecipe: Recipe;
name: string;
  constructor(private recipeService1: ShoppingListService) { }

  ngOnInit() {
    // this.recipeService1.testt.subscribe(
    //   (teststr: string) => {this.name = teststr; }
    // );
this.recipeService1.recipeSelected.subscribe(
  (recipe: Recipe) => { this.selectedRecipe = recipe; }
);
  }

}
