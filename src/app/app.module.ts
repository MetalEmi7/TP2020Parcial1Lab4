import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { QuienSoyComponent } from './pages/quien-soy/quien-soy.component';
//import { GameComponent } from './pages/game/game.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { CrearUsuarioComponent } from './pages/crear-usuario/crear-usuario.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { MostrarComponent } from './pages/mostrar/mostrar.component';
import { JwtModule } from '@auth0/angular-jwt';
import { VerFavoritosComponent } from './pages/ver-favoritos/ver-favoritos.component';

export function MyTokenGetter() {
  return localStorage.getItem("MyToken");
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListadoComponent,
    QuienSoyComponent,
    //GameComponent,
    UsuarioComponent,
    HomeComponent,
    MenuComponent,
    CrearUsuarioComponent,
    MostrarComponent,
    VerFavoritosComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: MyTokenGetter
      }
    }),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    //AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
