import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-favoritos',
  templateUrl: './ver-favoritos.component.html',
  styleUrls: ['./ver-favoritos.component.css']
})
export class VerFavoritosComponent implements OnInit {
  ListadoFavoritos: any[];

  constructor() { }

  ngOnInit(): void {
    this.ListadoFavoritos = JSON.parse(localStorage.getItem("ListadoFavoritos"))
  }

}
