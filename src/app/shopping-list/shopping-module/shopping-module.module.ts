import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from '../shopping-list.component';
import { SharedModuleModule } from 'src/app/shared/shared-module/shared-module.module';
import { RouterModule } from '@angular/router';
import { ShoppingEditComponent } from '../shopping-edit/shopping-edit.component';
import { FormsModule } from '@angular/forms';
import { CanDeactivateGuard } from 'src/app/guards/can-deactivate.guard';

const routes = [
  {path: 'shoppingList', canDeactivate: [CanDeactivateGuard], component: ShoppingListComponent}
];

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent
  ]
})
export class ShoppingModuleModule { }
