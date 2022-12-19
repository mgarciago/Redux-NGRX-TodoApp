import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent {

  completed: boolean = false;

  constructor(private store: Store<AppState>) { }

  toggleAll() {
    this.completed = !this.completed;
    this.store.dispatch(actions.toggleCompleteAll({ completed: this.completed }))
  }
}
