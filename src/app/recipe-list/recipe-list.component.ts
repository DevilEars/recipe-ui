import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor() { }

  recipes = [
    {id:1, name: 'Apple pie', description: 'Sugar, flour, chocolate, valium'},
    {id:2, name: 'Banana bread', description: 'Sugar, flour, bananas, vicodin'},
    {id:3, name: 'Choc chip cookies', description: 'Sugar, flour, chocolate, marijuana'}
  ];

  selectedRecipe?: any;

  ngOnInit(): void {
  }

  onSelect(recipe: any): void {
    this.selectedRecipe = recipe;
  }

  onDelete(recipe: any): void {
    this.recipes = this.recipes.filter(obj => obj.id != recipe.id);
  }

}
