import { Injectable } from '@angular/core';
import {Cliente} from '../../models/cliente';
import {of, Observable, throwError} from 'rxjs';
import {map, catchError } from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import swal from 'sweetalert2';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {


  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getClientes(): Observable<Cliente[]>{
    //return of(CLIENTES);
    return this.http.get<Cliente[]>(environment.USER);
  }

  create(cliente: Cliente): Observable<Cliente>{
    return this.http.post(environment.USER, cliente).pipe(
      map((response: any) => response.cliente as Cliente),
      catchError(e =>{
        console.error(e.error.mensaje);
        swal.fire('Error al crear el cliente', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  getCliente(id): Observable<Cliente>{
    return this.http.get<Cliente>(environment.USER + id).pipe(
      catchError(e =>{
        this.router.navigate(['/clientes']);
        console.error(e.error.mensaje);
        swal.fire('Error', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
    
  }

  update(cliente:Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(environment.USER + cliente.id, cliente).pipe(
      catchError(e =>{
        map((response: any) => response.cliente as Cliente),
        console.error(e.error.mensaje);
        swal.fire('Error al editar el cliente', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  delete(id:number): Observable<Cliente>{
    return this.http.delete<Cliente>(environment.USER + id).pipe(
      catchError(e =>{
        console.error(e.error.mensaje);
        swal.fire('Error al eliminar el cliente', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }


}