import { Component, OnInit, Input } from '@angular/core';
import { ToDoData } from '../TodoData';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {
  @Input() todo: ToDoData;

  constructor() {
  }

  ngOnInit(): void {
  }

}
