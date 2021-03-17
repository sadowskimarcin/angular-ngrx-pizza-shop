import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PizzaRoutingModule } from './pizza-routing.module';
import { PizzaCreateComponent } from './pizza-create/pizza-create.component';
import { PizzaService } from './pizza.service';
import { PizzaComponent } from './pizza/pizza.component';


@NgModule({
  declarations: [
    PizzaCreateComponent,
    PizzaComponent,
  ],
  imports: [
    CommonModule,
    PizzaRoutingModule
  ],
  providers: [
    PizzaService
  ]
})
export class PizzaModule { }
