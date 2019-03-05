import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ServiceTestService } from 'src/app/service-test.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: [RecipeService]
})
export class RecipeListComponent implements OnInit {
  recepies: Recipe[];

  constructor(
    private recipeService: RecipeService,
    private testRecipe: ServiceTestService
  ) {}

  ngOnInit() {
    this.testRecipe.getRecipesFromDB();
    this.testRecipe.recipeAdded.subscribe(
      (response: Recipe[]) => {
      this.recepies = response;
    });
    this.testRecipe.testbehaviorSubject.subscribe(
(resp) => {
  console.log(`Behavior subject ${resp}`);
}
    );

    this.testRecipe.testReplaySubject.subscribe(
      (resp: Recipe) => {console.log(`Replay Subject ${resp}`); }
    );
  }
}
