import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { pathToFileURL } from 'url';
import { ListadoComponent } from './pages/listado/listado.component';

const routes: Routes = [
  //Rutas
  {
    path: "", component: MenuComponent,
    children: [
      { path: "Listado", component: ListadoComponent },
      
    ]
  },
  { path: "", component: HomeComponent },
  { path: "", component: HomeComponent },
  { path: "", component: HomeComponent },
  { path: "", component: HomeComponent },
  { path: "", component: HomeComponent },
  { path: "", component: HomeComponent },
  { path: "", component: HomeComponent },
  { path: "", component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
