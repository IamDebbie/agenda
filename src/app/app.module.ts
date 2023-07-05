import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './Views/login/login.component';
import { NosotrosComponent } from './Views/nosotros/nosotros.component';
import { ContactanosComponent } from './Views/contactanos/contactanos.component';
import { InicioComponent } from './Views/inicio/inicio.component';
import { DashboardAdminComponent } from './Views/administrador/dashboard-admin/dashboard-admin.component';
import { DashboardDocenteComponent } from './Views/docente/dashboard-docente/dashboard-docente.component';


@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    NosotrosComponent,
    ContactanosComponent,
    InicioComponent,
    DashboardAdminComponent,
    DashboardDocenteComponent,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
