import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SimplePageComponent} from "./pages/simple-page/simple-page.component";

const routes: Routes = [
  {
    path: '',
    component: SimplePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
