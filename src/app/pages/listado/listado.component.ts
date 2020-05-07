import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  ListadoEJ: any[] = [];

  constructor(protected MyHttp: UsuarioService) { }

  ngOnInit(): void {}

  public GET(){
    this.MyHttp.getUsers()
    .subscribe((data) => {

      console.log(data["results"]);
      this.ListadoEJ = data["results"];
      
    });
  }
}
