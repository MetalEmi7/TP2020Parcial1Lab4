import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  user:string;
  obj: any;

  constructor(private MyJwtHelper: JwtHelperService) { }

  ngOnInit(): void {    
    this.obj = this.MyJwtHelper.decodeToken(localStorage.getItem("MyToken"));
    this.user = this.obj.email;
  }

}
