import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { empty } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  email: string;
  pass: string;
  nombre: string;


  constructor(public auth: AngularFireAuth, private router: Router) {  }
  

public crear()
{

 if (this.email == "" || this.pass == "" || this.nombre == "") {
   alert("Error: Ingrese datos");
   return;
 }

  this.auth.createUserWithEmailAndPassword(this.email, this.pass)
  .then(data => {

    console.log(data);

    data.user.updateProfile({
      displayName: this.nombre,      
    }).then(function() {
      debugger;
      var displayName = data.user.displayName;
    }, function(error) {
    });
    this.router.navigateByUrl("");

  })
  .catch(e => {
    console.log(e);
  });


}


  ngOnInit(): void {
  }


}
