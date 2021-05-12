import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  todos: Todo[] = [
    new Todo("Test", true),
    new Todo("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper consectetur erat, ut tincidunt nibh facilisis lobortis. In hac habitasse platea dictumst. Donec pretium, erat eget gravida consectetur, sem lectus vulputate odio, vel vestibulum metus ex pellentesque libero. Quisque pharetra orci urna, quis posuere lacus porta at."),
  ]
  constructor() { }

  getAllTodos() {
    return this.todos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  updateTodo(index: number, updatedTodo: Todo){
    this.todos[index] = updatedTodo
  }

  deleteTodo(index: number){
    this.todos.splice(index, 1);
  }
}
