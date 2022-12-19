import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.interface';
import { validFilters } from '../filter/filter.actions';

@Pipe({
  name: 'filtersTodo'
})
export class FiltersPipe implements PipeTransform {

  transform(todos: Todo[], filter: validFilters): Todo[] {
    switch (filter) {
      case 'completed':
        return todos.filter(todo => todo.completed)
      case 'active':
        return todos.filter(todo => !todo.completed)
      default:
        return todos;
    }
  }

}
