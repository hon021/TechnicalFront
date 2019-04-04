import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SomethingComponent } from './something/something.component';
import { DetailComponent } from './detail/detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: SomethingComponent
  },
  {
    path: 'something',
    component: SomethingComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  },
  {
    path:'',
    redirectTo: 'something',
    pathMatch: 'full'
  }
];

export const routedComponents = [
  SomethingComponent,
  DetailComponent
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
