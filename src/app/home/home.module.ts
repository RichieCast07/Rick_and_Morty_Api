import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesComponent } from './tables/tables.component';
import { HttpClient } from '@angular/common/http';




@NgModule({
  declarations: [
    TablesComponent
  ],
  imports: [
    CommonModule,
    HttpClient,
  ],
  exports: [ TablesComponent],
})
export class HomeModule { }
