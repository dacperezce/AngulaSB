import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ClientesComponent } from './pages/client/clientes.component';
import { ClienteService } from './services/client/cliente.service';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormComponent } from './pages/formClient/form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './pages/items/items.component';
import { ItemFormComponent } from './pages/item-form/item-form.component';

const routes: Routes =[
  {path: '', redirectTo: '/clientes', pathMatch: 'full'},
  {path: 'directivas', component: DirectivaComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'clientes/form', component: FormComponent},
  {path: 'clientes/form/:id', component: FormComponent},
  {path: 'items', component: ItemsComponent},
  {path: 'items/form', component: ItemFormComponent},
  {path: 'items/form/:id', component: ItemFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DirectivaComponent,
    FooterComponent,
    HeaderComponent,
    ClientesComponent,
    FormComponent,
    ItemsComponent,
    ItemFormComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
