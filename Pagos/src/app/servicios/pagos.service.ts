import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Mensaje, Pagos } from '../modelos/pagos';

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  URL_API = 'http://localhost:4000/adminPagos';
  //pagos:Pagos[];
  mensaje:Mensaje|undefined;

  constructor(private httpClient:HttpClient) { }

  getPagos():Observable<Pagos[]>{

    return this.httpClient.get<Pagos[]>(this.URL_API);

  }

  setPago(_id:string,newValue:boolean):Observable<Mensaje>{

    var jsonEnvio ={
      pagado:newValue
    }

    console.log(`el Id que entro: ${_id} con la bandera en: ${jsonEnvio}`);

    
    return this.httpClient.put<Mensaje>(`${this.URL_API}/${_id}`,jsonEnvio);;

  }

}
