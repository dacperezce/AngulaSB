import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item/item.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  item: Item;
  public titulo: string = "Crear Item";
  itemForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private itemService: ItemService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { 
      this.activatedRoute.params.subscribe(params => {
        let id = params['id'];

        const state = (params["state"] === "false") ? false : true;
        
        if(id){
          this.item = new Item(params['id'], params["itemName"], state)
          this.itemService.getItem(id).subscribe(
            item => this.item = item
          );
        }
        
      });
    }

  ngOnInit(): void {
    this.initForm();
  }

  get f() {
    return this.itemForm.controls;
  }

  initForm() {
    this.itemForm = this.fb.group({
      name: [
        (this.item) ? this.item.itemName : ""
      ],
      state: [
        (this.item) ? this.item.state : false
      ],
    });
  }

  public create(): void{
    const itemNew = new Item("", this.f.name.value, this.f.state.value);
    this.itemService.create(itemNew).subscribe(
      item => {
        this.router.navigate(['items']);
        swal.fire('Nuevo item',`item ${itemNew.itemName} creado con éxito`, 'success');
      }
    )
  }

  public update(): void{
    this.item = new Item(this.item.itemId, this.f.name.value, this.f.state.value);
    this.itemService.update(this.item).subscribe(
      item => {
        this.router.navigate(['/items']);
        swal.fire('item actualizado', `item ${this.item.itemName} actualizado con exito`, 'success');
      }
    );
  }

}
