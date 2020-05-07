import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent implements OnInit {
Foto: String = "Una foto";
Nombre: String = "Emiliano";
Apellido: String = "Alvarez";
Descripcion: String = "Actualmente soy Programador en una empresa de desarrollo de SoftWare que provee de soluciones practicas a clientes cercanos a la administracion de operaciones de seguros, bancarias entre otras";

  constructor() { }

  ngOnInit(): void {
  }

}
