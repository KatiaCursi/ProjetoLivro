import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TabelaLivrosComponent } from './tabela-livros/tabela-livros.component';
import { LivrosComponent } from './livros/livros.component';

@NgModule({
  declarations: [
    AppComponent,
    TabelaLivrosComponent,
    LivrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
