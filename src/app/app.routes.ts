import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './Services/log-in/log-in.component';
import { RegisterComponent } from './Services/log-in/register/register.component';
import { UserDashboardComponent } from './Services/log-in/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './Services/log-in/admin-dashboard/admin-dashboard.component';
import { SolicitarTurnoComponent } from './Services/log-in/solicitar-turno/solicitar-turno.component';
import { CRUDClientesComponent } from './Services/log-in/crud-clientes/crud-clientes.component';
import { ContactoComponent } from './Componentes/about-me/contacto/contacto.component';
import { HomeComponent } from './Componentes/about-me/home/home.component';
import { ProductosComponent } from './Componentes/about-me/productos/productos.component';
import { ServiciosComponent } from './Componentes/about-me/servicios/servicios.component';
import { AboutMeComponent } from './Componentes/about-me/about-me.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutMeComponent},
    { path: 'services', component: ServiciosComponent},
    { path: 'products', component: ProductosComponent},
    { path: 'contact', component: ContactoComponent},
    { path: 'login', component: LogInComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'user-dashboard', component: UserDashboardComponent},
    { path: 'admin-dashboard', component: AdminDashboardComponent},
    { path: 'solicitar-turno', component: SolicitarTurnoComponent},
    { path: 'crud-clientes', component: CRUDClientesComponent},
    { path: '**', redirectTo: '', pathMatch: 'full'} // redirige a Log-In si la ruta no existe
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}