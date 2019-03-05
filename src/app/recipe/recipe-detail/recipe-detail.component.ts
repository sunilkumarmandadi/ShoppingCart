import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Ingrediant } from '../../shared/ingrediants.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
import { ServiceTestService } from '../../service-test.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  num: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private testService: ServiceTestService
  ) {}

  ngOnInit() {
    console.log('ngOnInit in detail');
    this.testService.recipeSelected.subscribe((res: any) => {
      this.recipe = res;
      console.log(`Recipe Component ${res}`);
    });

    this.activatedRoute.params.subscribe((params: Params) => {
      this.num = +params['id']; // Here + is to convert string to number.
    });
  }

  deleteRecipe() {
    this.testService.DeleteRecipe(this.num);
  }

  RecipeEdit() {
    this.route.navigate(['../', 'edit', this.num], {
      relativeTo: this.activatedRoute
    });
    console.log(this.activatedRoute);
  }
  addShoppingList(recipeLst: Ingrediant[]) {
    // this.shoppingList.addShoppingList(recipeLst);
  }
}
