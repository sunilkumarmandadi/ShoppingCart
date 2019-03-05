import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
} from '@angular/core';
import { Ingrediant } from '../../shared/ingrediants.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  editIndex: number;
  edit: Ingrediant;
  isEdit: boolean;
  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    this.slService.shoppingLstEditIndex.subscribe((index: number) => {
      this.editIndex = index;
      this.edit = this.slService.getShoppingListByIndex(this.editIndex);
      this.isEdit = true;
      this.form.setValue({
        name: this.edit.name,
        amount: this.edit.amount
      });
    });
  }
  onSubmit() {
    const name = this.form.value.name;
    const amount = this.form.value.amount;
    const newIngrediant = new Ingrediant(name, amount);
    // this.slService.addIngrediant(newIngrediant);
    if (this.isEdit) {
      this.slService.addUpdateIngrediants.next({
        ingrediant: newIngrediant,
        index: this.editIndex,
        action: 'update'
      });
      this.isEdit = !this.isEdit;
    } else {
      this.slService.addUpdateIngrediants.next({
        ingrediant: newIngrediant,
        index: null,
        action: 'add'
      });
    }
    this.form.reset();
  }
  onClear() {
    this.form.reset();
    this.isEdit = false;
  }
  onDelete() {
this.slService.addUpdateIngrediants.next({ ingrediant: null, index: this.editIndex, action: 'delete'});
this.onClear();
  }
}
