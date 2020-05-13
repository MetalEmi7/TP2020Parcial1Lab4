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
  pass: string;

  constructor(public MyAuth: AngularFireAuth )
  {

  }

  ngOnInit(): void {
  }

  Login()
  {
    this.MyAuth.signInWithEmailAndPassword(this.email, this.pass)
    .then(data =>{
      console.log(data);
      

      localStorage.setItem("MyToken", data.user.toJSON().stsTokenManager.accessToken);


    




    })
    .catch(e => {
      console.log(e);
    })

    

   

//    this.MyAuth.signInWithPopup(new auth.GoogleAuthProvider());
  }

}
