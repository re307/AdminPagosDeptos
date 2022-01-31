import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

declare var $:any

@Component({
  selector: 'app-btn-switch',
  templateUrl: './btn-switch.component.html',
  styleUrls: ['./btn-switch.component.css']
})
export class BtnSwitchComponent implements OnInit {

  @Input() dataPadre = '';

  @ViewChild('togglebtn') togglebtnElement:ElementRef | undefined;

  classBtnToggle = '';
  IdPago ='';

  constructor() { }

  ngOnInit(): void {
  }

  obtenerDataPadr():void{
    
    let data = this.dataPadre?.split(',');

    // this.classBtnToggle = data[1];

    console.log(this.dataPadre);
  }
  setPagoRealizado(){

    if ($('#'+this.dataPadre).hasClass('active')) {

      $('#'+this.dataPadre).removeClass('active');
      
    }else{
      
      $('#'+this.dataPadre).addClass('active');

    }
    //this.render.addClass(this.togglebtnElement?.nativeElement,'active');
  }

}
