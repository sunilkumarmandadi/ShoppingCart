import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: [RecipeService]
})
export class RecipeListComponent implements OnInit {

  recepies: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recepies = this.recipeService.getRecipes();
  }
}
