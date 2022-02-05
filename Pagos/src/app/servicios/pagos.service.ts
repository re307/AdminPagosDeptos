import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Mensaje, Pagos, Periodo } from '../modelos/pagos';

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  URL_API = 'http://localhost:4000/adminPagos';
  //pagos:Pagos[];

  pago:Pagos ={
    _id: '',
    departamento: 0,
    monto: 0,
    Inicio_Periodo: '',
    Fin_Peridoo: '',
    pagado: false,
    createdAt: '',
    updatedAt: '',
    togglebtn: '',
    dataPadre: ''
  }

  mensaje:Mensaje|undefined;

  constructor(private httpClient:HttpClient) { }

  getPeriodos():Observable<Periodo[]>{

    return this.httpClient.get<Periodo[]>(`${this.URL_API}/periodos`);

  }

  getPagos():Observable<Pagos[]>{

    return this.httpClient.get<Pagos[]>(this.URL_API);

  }

  setPago(_id:string,newValue:boolean):Observable<Mensaje>{

    console.log("setPago(_id:string,newValue:boolean):Observable<Mensaje> newValue",newValue);

    var jsonEnvio ={
      pagado:newValue
    }

    console.log(`el Id que entro: ${_id} con la bandera en: ${jsonEnvio.pagado}`);

    
    return this.httpClient.put<Mensaje>(`${this.URL_API}/${_id}`,jsonEnvio);;

  }

}
