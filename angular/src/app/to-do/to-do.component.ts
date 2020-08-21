import { ToDoData } from "../TodoData"
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  current: string;
  todos: ToDoData[];
  constructor() {
    this.current = ""
    this.todos = []
  }

  ngOnInit(): void {
  }

  onAddToDo(){
    this.todos.push({ name: this.current , completed: false });
    this.current = "";
  }

}
