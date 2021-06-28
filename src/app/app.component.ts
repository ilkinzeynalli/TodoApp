import { Component } from '@angular/core';
import { Model, TodoItem } from './models/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  model: Model;
  isDisplay: boolean;

  constructor() {
    this.model = new Model();
    this.isDisplay = false;
  }

  getUser(): string {
    return this.model.user;
  }

  getItems(): TodoItem[] {
    if (this.isDisplay) {
      return this.model.items;
    }
    return this.model.items.filter((f) => !f.action);
  }

  addItem(item: string) {
    this.model.items.push(new TodoItem(item, false));
  }
}
