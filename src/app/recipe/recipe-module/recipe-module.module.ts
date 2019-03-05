import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponent } from '../recipe.component';
import { NewRecipeComponent } from '../new-recipe/new-recipe.component';
import { RecipeDetailComponent } from '../recipe-detail/recipe-detail.component';
import { SelectComponent } from '../select/select.component';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
import { RecipeItemComponent } from '../recipe-list/recipe-item/recipe-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModuleModule } from 'src/app/shared/shared-module/shared-module.module';

const routes: Routes = [
{path: '', component: RecipeComponent, children: [
{path: 'new', component: NewRecipeComponent},
{path: ':id', component: RecipeDetailComponent },
{path: 'edit/:id', component: NewRecipeComponent},
{path: '', component: SelectComponent}
]
}];

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    SharedModuleModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [
    RecipeComponent,
    RecipeListComponent,
    RecipeItemComponent,
    NewRecipeComponent,
    RecipeDetailComponent,
    SelectComponent
  ]
})


export class RecipeModuleModule { }
