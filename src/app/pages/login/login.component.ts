import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  pass: string;

  constructor(public MyAuth: AngularFireAuth, private router: Router )
  {

  }

  ngOnInit(): void {
  }

  Login()
  {
    this.MyAuth.signInWithEmailAndPassword(this.email, this.pass)
    .then(data =>{

      data.user.getIdToken(false)
      .then(tokenData => {
        localStorage.setItem("MyToken", tokenData);
      })

      this.router.navigateByUrl("");
      localStorage.removeItem("ListadoFavoritos")
    })
    .catch(e => {
    })
  }
}
