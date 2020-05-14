import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ListadoEJ: any[] = [];

  constructor(protected MyHttp: UsuarioService) { }

  ngOnInit(): void {}

  public GET(){
    this.MyHttp.getUsers()
    .subscribe((data) => {
      this.ListadoEJ = data["results"];      
    });
  }
}
