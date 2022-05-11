import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css'],
})
export class RecipeFormComponent implements OnInit {

  model = { id: null, name: null, description: null};

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if(this.model.id){
      // save new
    }
    else {
      // update existing
    }

    this.router.navigate(['/']);
  }
}
