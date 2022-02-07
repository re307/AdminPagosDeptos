import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';

import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { PagosComponent } from './componentes/pagos/pagos.component';
import { BtnSwitchComponent } from './componentes/btn-switch/btn-switch.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

const material = [
  MatSelectModule
]

@NgModule({
  declarations: [
    AppComponent,
    PagosComponent,
    BtnSwitchComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatSelectModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
