import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { ServiceTestService } from 'src/app/service-test.service';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {
  id: number;
  editMode: boolean;
  formGroup: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private testRecipeService: ServiceTestService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.inItForm();
    });

    this.recipeService.revipeSave.subscribe((selectedItem: String) => {
      if (selectedItem === 'saverecipe') {
        const fg = this.formGroup.value;
        const recipe = new Recipe(
          fg.rName,
          fg.rDesc,
          fg.rImgUrl,
          fg.rIngrediants
        );
        this.recipeService.SaveRecipe(recipe).subscribe(response => {
          console.log(response);
        });
      }
    });
  }

  private inItForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDesc = '';
    const recipeIngrediants = new FormArray([]);

    if (this.editMode) {
      // Assigning the values to the textboxes
      const recipe = this.testRecipeService.fetchIngrediantsById(this.id);
      recipeName = recipe.name;
      recipeDesc = recipe.description;
      recipeImagePath = recipe.imagePath;
      if (recipe.ingrediants) {
        for (const ingrediant of recipe.ingrediants) {
          recipeIngrediants.push(
            new FormGroup({
              name: new FormControl(ingrediant.name),
              amount: new FormControl(ingrediant.amount)
            })
          );
        }
      }
    }

    this.formGroup = new FormGroup({
      rName: new FormControl(recipeName, Validators.required),
      rImgUrl: new FormControl(recipeImagePath, Validators.required),
      rDesc: new FormControl(recipeDesc, Validators.required),
      rIngrediants: recipeIngrediants
    });
  }

  getFormGroupControls() {
    return (<FormArray>this.formGroup.get('rIngrediants')).controls;
  }
  AddIngrediant() {
    (<FormArray>this.formGroup.get('rIngrediants')).push(
      new FormGroup({
        name: new FormControl(),
        amount: new FormControl()
      })
    );
  }
  saveUpdateRecipe() {
    console.log(this.formGroup);
    const fg = this.formGroup.value;
    const recipe = new Recipe(fg.rName, fg.rDesc, fg.rImgUrl, fg.rIngrediants);
    if (this.editMode) {
      this.testRecipeService.UpdateRecipe(this.id, recipe);
      this.formGroup.reset();
    } else {
      this.testRecipeService.SaveRecipe(recipe).subscribe(response => {
        console.log(response);
        this.formGroup.reset();
      });
    }
  }
}
