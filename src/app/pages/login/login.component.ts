import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  pass: String;

  constructor(public MyAuth: AngularFireAuth)
  {

  }

  ngOnInit(): void {
  }

  Login()
  {
    this.MyAuth.signInWithPopup(new auth.GoogleAuthProvider());
  }

}
