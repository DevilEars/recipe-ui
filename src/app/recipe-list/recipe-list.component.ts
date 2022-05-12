import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}

  // Hard coded values from before we had an Angular service that connects to the Spring server
  // recipes = [
  //   {id:1, name: 'Apple pie', description: 'Sugar, flour, chocolate, valium'},
  //   {id:2, name: 'Banana bread', description: 'Sugar, flour, bananas, vicodin'},
  //   {id:3, name: 'Choc chip cookies', description: 'Sugar, flour, chocolate, marijuana'}
  // ];

  recipes: any;

  selectedRecipe?: any;

  ngOnInit(): void {
    this.recipeService.getRecipeList().subscribe({
      next: (r) => (this.recipes = r),
      error: (e) => console.log(e),
    });
  }

  onSelect(recipe: any): void {
    this.selectedRecipe = recipe;
  }

  onDelete(recipe: any): void {
    // hard coded values delete operation
    // you are better than this now
    // you no longer need this baggage
    // this.recipes = this.recipes.filter(obj => obj.id != recipe.id);
    this.recipeService.deleteRecipe(recipe.id).subscribe({
      next: (r) => this.ngOnInit(),
      error: (e) => console.log(e),
    });
  }
}
