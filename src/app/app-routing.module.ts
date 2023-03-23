import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAlbumsComponent } from './components/add-albums/add-albums.component';
import { AlbumsComponent } from './components/albums/albums.component';

const routes: Routes = [
  { path: '', redirectTo: 'albums', pathMatch: 'full' },
  { path: 'albums', component: AlbumsComponent },
  { path: 'add-albums', component: AddAlbumsComponent },
  { path: '**', redirectTo: 'albums' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
