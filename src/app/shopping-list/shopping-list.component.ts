import { Ingredient } from './../shared/ingedient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Lettuce', 4),
    new Ingredient('Tomatoes', 5),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
