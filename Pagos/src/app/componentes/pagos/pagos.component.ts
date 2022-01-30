import { Component, OnInit } from '@angular/core';
import { Pagos } from 'src/app/modelos/pagos';
import { PagosService } from 'src/app/servicios/pagos.service';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {

  pago:Pagos = {
    _id:'',
    departamento:0,
    monto:0,
    Inicio_Periodo:'',
    Fin_Peridoo:'',
    pagado:false,
    createdAt:'',
    updatedAt:''
  };

  pagos =[this.pago]

  constructor(public pagosService:PagosService) { }

  ngOnInit(): void {

     this.getPagos();
      
  }

  getPagos(){ 

    this.pagosService.getPagos().subscribe(
      pagos => {
        this.pagos = pagos
        console.log(this.pagos);
      }
    );

  }

}
