import { Component, OnInit } from '@angular/core';
import { Ingrediant } from '../shared/ingrediants.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingrediants: Ingrediant[] = [];
  editIndex: number;
  constructor(private ssList: ShoppingListService) {}

  ngOnInit() {
    this.ingrediants = this.ssList.getShoppingList();

    this.ssList.addUpdateIngrediants.subscribe(
      ({ ingrediant: ingrediant, index: index, action: action }) => {
        // this.ssList.ingrediants.push(ingrediant);
        if (action === 'update') {
          this.ssList.updateIngrediants(index, ingrediant);
        } else if (action === 'add') {
          this.ssList.addShoppingList(ingrediant);
        } else if ( action === 'delete') {
          this.ssList.deleteIngrediants(index);
        }
        this.ingrediants = this.ssList.getShoppingList();
      }
    );
  }

  editShoppingList(index: number) {
    this.ssList.shoppingLstEditIndex.next(index);
  }
}
