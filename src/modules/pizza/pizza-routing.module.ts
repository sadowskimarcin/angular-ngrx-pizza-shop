import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaCreateComponent } from './pizza-create/pizza-create.component';
import { PizzaComponent } from './pizza/pizza.component';

const routes: Routes = [
  {
    path: '', component: PizzaComponent,
    children: [
      { path: 'create', component: PizzaCreateComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PizzaRoutingModule { }
