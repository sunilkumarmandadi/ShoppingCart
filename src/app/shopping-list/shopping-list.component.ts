import { Component, OnInit } from '@angular/core';
import {Ingrediant } from '../shared/ingrediants.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingrediants: Ingrediant[] = [];
  constructor(private ssList: ShoppingListService) { }

  ngOnInit() {
    this.ingrediants = this.ssList.getShoppingList();
    this.ssList.ingrediantAdded.subscribe(
(ingrediants: Ingrediant[]) => {
   this.ingrediants = ingrediants; }
    );
  }

}
