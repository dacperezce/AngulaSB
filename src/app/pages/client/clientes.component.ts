import { Component, OnInit } from '@angular/core';
import {Cliente} from '../../models/cliente';
import {ClienteService} from '../../services/client/cliente.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(
      clientes => this.clientes = clientes
    );
  }

  delete(cliente:Cliente): void{
    swal.fire({
      title: 'Esta seguro',
      text: `¿Seguro que desea eliminar el cliente ${cliente.nombre} ${cliente.apellido}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      reverseButtons: true
    }).then( (result) => {
      if(result.isConfirmed){
        this.clienteService.delete(cliente.id).subscribe(
          response => {
            this.clientes = this.clientes.filter(cli => cli !== cliente);
            swal.fire(
              'Cliente eliminado',
              `Cliente ${cliente.nombre} eliminado con exito`,
              'success'
            );
          }
        );
      }
    });
  }

}
