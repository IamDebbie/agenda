import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosComponent } from './Views/nosotros/nosotros.component';
import { ContactanosComponent } from './Views/contactanos/contactanos.component';
import { InicioComponent } from './Views/inicio/inicio.component';
import { LoginComponent } from './Views/login/login.component';
import { AppComponent } from './app.component';
import { DashboardAdminComponent } from './Views/administrador/dashboard-admin/dashboard-admin.component';
import { DashboardDocenteComponent } from './Views/docente/dashboard-docente/dashboard-docente.component';
const routes: Routes = [


  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent, data: { title: 'Inicio' } },
  {path: 'app', component: AppComponent, data: { title: 'Inicio' } },
  { path: 'contactanos', component: ContactanosComponent, data: { title: 'Contáctanos' }  },
  { path: 'nosotros', component: NosotrosComponent, data: { title: 'Nosotros' }  },
  { path: 'login', component: LoginComponent, data: { title: 'Iniciar sesión' }  },
  { path: 'dashboard-admin', component: DashboardAdminComponent, pathMatch: 'full' },
  { path: 'dashboard-docente', component: DashboardDocenteComponent, pathMatch: 'full'}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
