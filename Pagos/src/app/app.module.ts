import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PagosComponent } from './componentes/pagos/pagos.component';
import { BtnSwitchComponent } from './componentes/btn-switch/btn-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    PagosComponent,
    BtnSwitchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
