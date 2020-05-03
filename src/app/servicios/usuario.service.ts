import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(protected myservicio: HttpClient) { }

  getUsers() {
    return this.myservicio.get('https://randomuser.me/api/?results=25');
  }

}
