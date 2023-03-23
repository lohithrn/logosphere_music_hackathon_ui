import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { AddAlbumsComponent } from './components/add-albums/add-albums.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputListComponent } from './components/input-list/input-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    AddAlbumsComponent,
    InputListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
