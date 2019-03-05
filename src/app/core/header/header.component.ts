import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { RecipeService } from '../../recipe/recipe.service';


@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent  {
@Output() selectedItemEventEmitter = new EventEmitter<string>();

constructor(private recipeService: RecipeService) {

}

selectedItem(item: string) {
this.selectedItemEventEmitter.emit(item);
}
selectedItem1(item: string) {
this.recipeService.revipeSave.next(item);
}
}
