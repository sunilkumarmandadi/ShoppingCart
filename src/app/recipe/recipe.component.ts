import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { ServiceTestService } from '../service-test.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']

})
export class RecipeComponent implements OnInit {
selectedRecipe: Recipe;
name: string;
  constructor(private recipeService1: ShoppingListService,
    private testService: ServiceTestService) { }

  ngOnInit() {
    // this.recipeService1.testt.subscribe(
    //   (teststr: string) => {this.name = teststr; }
    // );

  }

}
