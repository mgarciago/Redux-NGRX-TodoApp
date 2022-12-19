import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../../filter/filter.actions';
import { clearCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  actualFilter: actions.validFilters = 'all';
  filters: actions.validFilters[] = ['all', 'completed', 'active'];
  lefts: number = 0;


  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.actualFilter = state.filter;
      this.lefts = state.todos.filter(todo => !todo.completed).length;
    })
  }

  changeFilter(filter: actions.validFilters) {
    this.store.dispatch(actions.setFilter({ filter: filter }));
  }

  clearCompleted() {
    this.store.dispatch(clearCompleted());
  }
}
