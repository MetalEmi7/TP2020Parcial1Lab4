import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  user: string;
  pass: String;
  correo: string;


  constructor() { }

  ngOnInit(): void {
  }

  Crear()
  {
    console.log(this.pass + " - " + this.user + " - "+ this.correo);
  }

}
