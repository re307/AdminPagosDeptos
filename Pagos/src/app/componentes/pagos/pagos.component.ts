import { Element } from '@angular/compiler';
import { Component, ElementRef, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { Pagos,Periodo,PagoEnvio } from 'src/app/modelos/pagos';
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
  periodos:Periodo[]=[];

  departamentos =[
    {_id:'17',departamento:17},
    {_id:'18',departamento:18},
    {_id:'19',departamento:19},
    {_id:'20',departamento:20},
    {_id:'117',departamento:117},
    {_id:'118',departamento:118},
  ]

  cambio:boolean = false;

  mensaje:string = '';
  

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

  getPeriodos(){
    this.pagosService.getPeriodos().subscribe(
      periodos =>{
        periodos.forEach((value)=>{
          value.etiqueta = `Del ${value.Inicio_Periodo.split('T')[0]} al ${value.Fin_Peridoo.split('T')[0]}`;
          this.periodos?.push(value);
        });
        // this.periodos = periodos;
        console.log(this.periodos);
      }
    );
  }

  addPago(Depto:any,Periodos:any){
    console.log(Depto.value);
    console.log(Periodos.value);
    Periodos.value.forEach((periodo:Periodo)=>{
      var pago:PagoEnvio ={
        departamento: Depto.value,
        monto: 50.00,
        Inicio_Periodo: periodo.Inicio_Periodo,
        Fin_Peridoo: periodo.Fin_Peridoo,
        pagado: false
      }
      console.log(pago);
      this.pagosService.putPagosDepto(pago).subscribe(
        pagoDepto =>{
          console.log(pagoDepto);
        }
      );
    });
    
    var periodosNew:Periodo[]=[];
    this.periodos = periodosNew;
    this.getPagos();
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
  onSelect(value:string){
    //console.log(value);
    var periodosNew:Periodo[]=[];
    this.periodos = periodosNew;
    var mesList: number[] = [];
    this.pagosService.getDeptoPagos(value).subscribe(
      pagos =>{
        pagos.forEach((value)=>{
          var mes = 0;

          mes = Number(value.Inicio_Periodo.split('T')[0].split('-')[1]);
          mesList.push(mes);
        });
      }
    );
    console.log('mesList',mesList);
    this.pagosService.getPeriodos().subscribe(
      periodos =>{
        periodos.forEach((value)=>{
          value.etiqueta = `Del ${value.Inicio_Periodo.split('T')[0]} al ${value.Fin_Peridoo.split('T')[0]}`;
          value.selected = mesList.includes(value.mes);
          this.periodos?.push(value);
        });
        // this.periodos = periodos;
        console.log(this.periodos);
      }
    );
  }

}
