import { Element } from '@angular/compiler';
import { Component, ElementRef, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { Pagos,Mensaje } from 'src/app/modelos/pagos';
import { PagosService } from 'src/app/servicios/pagos.service';

declare var $:any

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {

  @ViewChild('togglebtn') togglebtnElement:ElementRef | undefined;
  pago:Pagos = {
    _id:'',
    departamento:0,
    monto:0,
    Inicio_Periodo:'',
    Fin_Peridoo:'',
    pagado:false,
    createdAt:'',
    updatedAt:'',
    togglebtn:'',
    dataPadre:''
  };

  pagos =[this.pago]
  

  constructor(public pagosService:PagosService,private render:Renderer2) { }

  ngOnInit(): void {

     this.getPagos();
      
  }

  getPagos(){ 

    this.pagosService.getPagos().subscribe(
      pagos => {
        pagos.forEach((value)=>{

          let inicioPeriodo = value.Inicio_Periodo;
          let finPeriodo = value.Fin_Peridoo;

          inicioPeriodo = inicioPeriodo.split('T')[0];
          finPeriodo = finPeriodo.split('T')[0];

          value.Inicio_Periodo = inicioPeriodo;
          value.Fin_Peridoo = finPeriodo;

          value.togglebtn = (value.pagado?'toggle-btn active':'toggle-btn');

          value.dataPadre = value._id;

        });
        console.log(pagos);
        this.pagos = pagos
      }
    );

  }

  realizaPago(emiterData:string){

    console.log(emiterData);

    var dataHijo = emiterData.split(',');

    var _Id = dataHijo[0];
    var btn_switch_Id = dataHijo[1];
    var valueInicia = (dataHijo[2]=='true');

    console.log(btn_switch_Id);
    console.log(valueInicia);

    //this.pagosService.setPago().subscribe

    if ($(btn_switch_Id).hasClass('active')) {

      $(btn_switch_Id).removeClass('active');

    }else{
      
      $(btn_switch_Id).addClass('active');
      

    }
    
  }

}
