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
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

const routes: Routes =[
  {path: '', redirectTo: '/clientes', pathMatch: 'full'},
  {path: 'directivas', component: DirectivaComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'clientes/form', component: FormComponent},
  {path: 'clientes/form/:id', component: FormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DirectivaComponent,
    FooterComponent,
    HeaderComponent,
    ClientesComponent,
    FormComponent
  ],
  imports: [
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
