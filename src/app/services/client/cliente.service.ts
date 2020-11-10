import { Injectable } from '@angular/core';
import {Cliente} from '../../models/cliente';
import {of, Observable, throwError} from 'rxjs';
import {map, catchError } from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import swal from 'sweetalert2';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPoint: string ='http://localhost:8080/api/clientes';

  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'})

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getClientes(): Observable<Cliente[]>{
    //return of(CLIENTES);
    return this.http.get<Cliente[]>(this.urlEndPoint);
  }

  create(cliente: Cliente): Observable<Cliente>{
    return this.http.post(this.urlEndPoint, cliente, {headers: this.httpHeaders}).pipe(
      map((response: any) => response.cliente as Cliente),
      catchError(e =>{
        console.error(e.error.mensaje);
        swal.fire('Error al crear el cliente', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  getCliente(id): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e =>{
        this.router.navigate(['/clientes']);
        console.error(e.error.mensaje);
        swal.fire('Error', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
    
  }

  update(cliente:Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${this.urlEndPoint}/${cliente.id}`, cliente, {headers: this.httpHeaders}).pipe(
      catchError(e =>{
        map((response: any) => response.cliente as Cliente),
        console.error(e.error.mensaje);
        swal.fire('Error al editar el cliente', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  delete(id:number): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders}).pipe(
      catchError(e =>{
        console.error(e.error.mensaje);
        swal.fire('Error al eliminar el cliente', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }


}
