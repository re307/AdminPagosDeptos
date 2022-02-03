import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

declare var $:any

@Component({
  selector: 'app-btn-switch',
  templateUrl: './btn-switch.component.html',
  styleUrls: ['./btn-switch.component.css']
})
export class BtnSwitchComponent implements OnInit {

  @Input() dataPadre = '';
  @Input() classBtn = '';
  @Input() valueEntrada:any;
  Id_btnSwitch = "btn-switch";
  @Output() swirchActivado = new  EventEmitter<string>();

  classBtnToggle = '';
  IdPago ='';

  constructor() { }

  ngOnInit(): void {
    this.Id_btnSwitch+=this.dataPadre;
  }

  obtenerDataPadr():void{
    
    let data = this.dataPadre?.split(',');

    // this.classBtnToggle = data[1];

    console.log(this.dataPadre);
  }
  setPagoRealizado(){

    var emiterData = `${this.dataPadre},${this.Id_btnSwitch},${this.valueEntrada}`;
    this.swirchActivado.emit(emiterData);

  }

}
