import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  user: string;
  pass: String;
  correo: string;


  constructor(public auth: AngularFireAuth) {
  }

  // login() {
  //   this.auth.signInWithPopup(new auth.GoogleAuthProvider());
  // }
  
  logout() {
    this.auth.signOut();
  }
  

  ngOnInit(): void {
  }

  Crear()
  {
    console.log(this.pass + " - " + this.user + " - "+ this.correo);
  }

}
