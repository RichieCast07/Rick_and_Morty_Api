import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablesComponent } from './home/tables/tables.component';
import { CharactersComponent } from './components/characters/characters.component';

const routes: Routes = [
  { path: 'table-inf', component: TablesComponent},
  { path: 'characters', component: CharactersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }