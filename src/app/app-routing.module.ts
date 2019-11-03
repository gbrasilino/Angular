import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListarComponent} from './filme/listar/listar.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
