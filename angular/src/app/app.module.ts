import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/to-do.component';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    ToDoItemComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
