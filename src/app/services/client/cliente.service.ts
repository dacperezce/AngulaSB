import { Injectable } from '@angular/core';
import {Cliente} from '../../models/cliente';
import {of, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'})

  constructor(
    private http: HttpClient
  ) { }

  getClientes(): Observable<Cliente[]>{
    //return of(CLIENTES);
    return this.http.get<Cliente[]>(environment.USER);
  }

  create(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(environment.USER, cliente);
  }

  getCliente(id): Observable<Cliente>{
    return this.http.get<Cliente>(environment.USER + id);
  }

  update(cliente:Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(environment.USER + cliente.id, cliente);
  }

  delete(id:number): Observable<Cliente>{
    return this.http.delete<Cliente>(environment.USER + id);
  }


}
