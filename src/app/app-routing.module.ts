import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsTableComponent } from './home/cards-table/cards-table.component';

const routes: Routes = [
  {path: '' , component:CardsTableComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

  
})
export class AppRoutingModule {
   
}
