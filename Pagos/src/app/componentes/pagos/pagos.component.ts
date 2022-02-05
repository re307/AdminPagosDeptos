import { Element } from '@angular/compiler';
import { Component, ElementRef, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { Pagos,Periodo } from 'src/app/modelos/pagos';
import { PagosService } from 'src/app/servicios/pagos.service';
import { NgForm } from '@angular/forms';

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

  pagos =[this.pago];
  periodos:Periodo[]|undefined;

  cambio:boolean = false;

  mensaje:string = '';
  

  constructor(public pagosService:PagosService,private render:Renderer2) { }

  ngOnInit(): void {

     this.getPagos();
     this.getPeriodos();
      
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

  getPeriodos(){
    this.pagosService.getPeriodos().subscribe(
      periodos =>{
        periodos.forEach((value)=>{
          let inicioPeriodo = value.Inicio_Periodo;
          let finPeriodo = value.Fin_Peridoo;

          inicioPeriodo = inicioPeriodo.split('T')[0];
          finPeriodo = finPeriodo.split('T')[0];

          value.Inicio_Periodo = inicioPeriodo;
          value.Fin_Peridoo = finPeriodo;
        });
        this.periodos = periodos;
        console.log(periodos);
      }
    );
  }

  addPago(form:NgForm){
    console.log(form.value);
  }

  realizaPago(emiterData:string){

    console.log(emiterData);

    var dataHijo = emiterData.split(',');

    var _Id = dataHijo[0];
    var btn_switch_Id = `#${dataHijo[1]}`;
    var valueInicia = ((dataHijo[2]=='true')==true?false:true);

    this.cambio = valueInicia;

    console.log(btn_switch_Id);
    console.log(valueInicia);

    this.pagosService.setPago(_Id,valueInicia).subscribe(
      mensaje =>{
        
        console.log(mensaje.message);
        this.mensaje = mensaje.message;
        console.log('this.mensaje',this.mensaje);
        if (this.mensaje === 'success') {

          this.pagos.find((value,index)=>{
            if (value._id == _Id) {
              this.pagos[index].pagado = this.cambio;
            }
          });

          if ($(btn_switch_Id).hasClass('active')&&(!this.cambio)) {

            console.log("$(btn_switch_Id).hasClass('active')&&(!this.cambio)");
      
            $(btn_switch_Id).removeClass('active');
      
          }
          if (!$(btn_switch_Id).hasClass('active')&&(this.cambio)) {

            console.log("!$(btn_switch_Id).hasClass('active')&&(this.cambio)");
      
            $(btn_switch_Id).addClass('active');
      
          }

        }else{
          console.log("no successs");
        }
      }
    );
    
  }

}
