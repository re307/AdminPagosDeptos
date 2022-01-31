import { Element } from '@angular/compiler';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Pagos } from 'src/app/modelos/pagos';
import { PagosService } from 'src/app/servicios/pagos.service';

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

}
