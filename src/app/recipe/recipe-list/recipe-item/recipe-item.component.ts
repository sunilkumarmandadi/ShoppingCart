import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
import { ShoppingListService } from '../../../shopping-list/shopping-list.service';
import { Router } from '@angular/router';
import { ServiceTestService } from 'src/app/service-test.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input() recipe: Recipe;
@Input() ind: number;

  constructor(private recipeService: ShoppingListService,
     private reservice: RecipeService,
     private testService: ServiceTestService,
     private rt: Router) { }

  ngOnInit() {
  }

  onRecipeSelected() {
this.testService.recipeSelected.next(this.recipe);
this.rt.navigate(['/recipe', this.ind]);

  }
}
