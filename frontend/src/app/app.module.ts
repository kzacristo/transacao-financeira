// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; // Importe o HttpClientModule aqui

import { TransacaoService } from './components/services/transacao.service'; // Serviço de transações

@NgModule({
  declarations: [
    AppComponent,
    // outros componentes...
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  // Adicione o HttpClientModule aqui
    // outros módulos...
  ],
  providers: [TransacaoService],  // Certifique-se de que o serviço esteja listado nos providers
  bootstrap: [AppComponent]
})
export class AppModule { }
