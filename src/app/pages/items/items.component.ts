import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item/item.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[];

  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe((items) => {
      this.items = items;
    })
  }



  delete(item: Item) {
    swal.fire({
      title: 'Esta seguro',
      text: `¿Seguro que desea eliminar el item ${item.itemName}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.itemService.delete(item.itemId).subscribe(
          response => {
            this.items = this.items.filter(cli => cli !== item);
            swal.fire(
              'Item eliminado',
              `Item ${item.itemName} eliminado con exito`,
              'success'
            );
          }
        );
      }
    });
  }
}
