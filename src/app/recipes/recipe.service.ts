import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from "./recipe.model";
import { Ingredient } from '../shared/ingedient.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Grand snitzel', 'Delicious snitzel', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/1200px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
     [
      new Ingredient('Meat', 1),
      new Ingredient('French fries', 20)
     ]),
    new Recipe('Big Borgir', 'A Big Fat Juicy Burger', 'https://static.vecteezy.com/system/resources/previews/020/640/042/original/delicious-mouth-watering-hamburger-cheeseburger-with-cheese-tomato-and-lettuce-on-a-transparent-background-free-png.png',
     [
      new Ingredient('buns', 2),
      new Ingredient('Meat', 1)
     ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
