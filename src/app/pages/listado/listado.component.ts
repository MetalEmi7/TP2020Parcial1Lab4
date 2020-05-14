import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  ListadoPersonas: any[] = [];
  ListadoFavoritos: any[] = [];

  constructor(protected MyHttp: UsuarioService) { }

  ngOnInit(): void {
    this.GET();
    this.ListadoFavoritos = JSON.parse(localStorage.getItem("ListadoFavoritos"))
  }

  public GET(){
    this.MyHttp.getUsers()
    .subscribe((data) => {
      console.log(data["results"]);
      this.ListadoPersonas = data["results"];      
    });
  }

  AgregarFavorito(persona){

    if ( this.ListadoFavoritos == null) {
      this.ListadoFavoritos = [];
    }

    this.ListadoFavoritos.push(persona);
    localStorage.removeItem("ListadoFavoritos")
    debugger;


    var emi = JSON.stringify(this.ListadoFavoritos);
    localStorage.setItem("ListadoFavoritos", emi);


  }
}
