import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Pagos } from '../modelos/pagos';

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  URL_API = 'http://localhost:4000/adminPagos';
  //pagos:Pagos[];

  constructor(private httpClient:HttpClient) { }

  getPagos():Observable<Pagos[]>{

    return this.httpClient.get<Pagos[]>(this.URL_API);

  }

}
