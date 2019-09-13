import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InserirComponent } from './filme/inserir/inserir.component';
import { RemoverComponent } from './filme/remover/remover.component';
import { AtualizarComponent } from './filme/update/atualizar.component';
import { ListarComponent } from './filme/listar/listar.component';

@NgModule({
  declarations: [
    AppComponent,
    InserirComponent,
    RemoverComponent,
    AtualizarComponent,
    ListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
