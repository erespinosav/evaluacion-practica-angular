import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeService } from './services/coffee-service/coffee.service';
import { CoffeeListComponent } from './components/coffee-list/coffee-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CoffeeListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    CoffeeService
  ],
  exports:[
    CoffeeListComponent
  ]
})
export class CoffeeModule { }
