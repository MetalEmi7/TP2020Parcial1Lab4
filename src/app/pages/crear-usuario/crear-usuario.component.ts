import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { empty } from 'rxjs';


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  email: string;
  pass: string;


  constructor(public auth: AngularFireAuth) {  }
  

public ingresar()
{

 if (this.email == "" || this.pass == "") {
   alert("Error: Ingrese datos");
   return;
 }


  this.auth.createUserWithEmailAndPassword(this.email, this.pass)
  .then(data => {
    console.log(data);
  })
  .catch(e => {
    console.log(e);
  });
}




  logout() {
    this.auth.signOut();
  }
  



  ngOnInit(): void {
  }



  Crear()
  {
    
  }

}
