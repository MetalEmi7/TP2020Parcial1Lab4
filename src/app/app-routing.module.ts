import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { pathToFileURL } from 'url';
import { ListadoComponent } from './pages/listado/listado.component';
import { QuienSoyComponent } from './pages/quien-soy/quien-soy.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent,
    children: [
      { path: "Login", component: ListadoComponent },
      { path: "CrearUsuario", component: ListadoComponent },
      { path: "Listado", component: ListadoComponent },
      { path: "QuienSoy", component: QuienSoyComponent }
      
    ]},
    //{path: "**", component: component: ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
