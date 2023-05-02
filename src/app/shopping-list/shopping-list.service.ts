import { Ingredient } from "../shared/ingedient.model";

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Lettuce', 4),
    new Ingredient('Tomatoes', 5),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
  }
}
