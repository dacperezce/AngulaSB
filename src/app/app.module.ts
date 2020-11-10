import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ClientesComponent } from './pages/client/clientes.component';
import { ClienteService } from './services/client/cliente.service';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormComponent } from './pages/formClient/form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './pages/items/items.component';
import { ItemFormComponent } from './pages/item-form/item-form.component';
import { LoginComponent } from './pages/login/login.component';
import { InterceptorHttpService } from './services/interceptor/interceptor-http.service';

const routes: Routes =[
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'directivas', component: DirectivaComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'clientes/form', component: FormComponent},
  {path: 'clientes/form/:id', component: FormComponent},
  {path: 'items', component: ItemsComponent},
  {path: 'items/form', component: ItemFormComponent},
  {path: 'items/form/:id/:itemName/:state', component: ItemFormComponent},
  {path: 'login', component: LoginComponent}
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
    ItemFormComponent,
    LoginComponent
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
    ClienteService,
    ,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorHttpService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
