import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { 
  Mensaje, 
  Pagos,
  PagoEnvio, 
  Periodo 
} from '../modelos/pagos';
import { NoopAnimationPlayer } from '@angular/animations';

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
  

  getDeptoPagos(depto:string):Observable<Pagos[]>{

    return this.httpClient.get<Pagos[]>(`${this.URL_API}/deptos/${depto}`);

  }

  setPago(_id:string,newValue:boolean):Observable<Mensaje>{
    var jsonEnvio ={
      pagado:newValue
    }

    return this.httpClient.put<Mensaje>(`${this.URL_API}/${_id}`,jsonEnvio);;

  }

  putPagosDepto(pago:PagoEnvio):Observable<Mensaje>{
    return this.httpClient.post<Mensaje>(this.URL_API,pago);
  }

}
