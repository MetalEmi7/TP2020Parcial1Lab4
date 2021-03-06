import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { pathToFileURL } from 'url';
import { ListadoComponent } from './pages/listado/listado.component';
import { QuienSoyComponent } from './pages/quien-soy/quien-soy.component';
import { LoginComponent } from './pages/login/login.component';
import { CrearUsuarioComponent } from './pages/crear-usuario/crear-usuario.component';
import { MostrarComponent } from './pages/mostrar/mostrar.component';
import { AuthGuard } from './guards/auth.guard';
import { VerFavoritosComponent } from './pages/ver-favoritos/ver-favoritos.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent,
    children: [
      { path: "QuienSoy", component: QuienSoyComponent },
      { path: "CrearUsuario", component: CrearUsuarioComponent },
      { path: "Login", component: LoginComponent },      
      { path: "Listado", component: ListadoComponent, canActivate: [AuthGuard],
      children: [
          {path: "Mostrar", component: MostrarComponent}
        ]
      },
      { path: "Favoritos", component: VerFavoritosComponent, canActivate: [AuthGuard]
  
      }
    ]
  }
    //{path: "**", component: component: ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
