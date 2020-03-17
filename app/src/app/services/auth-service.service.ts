import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as DATABASE from '../assets/usuarios.json';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private db_url:string = "assets/usuarios.json";
  private database = DATABASE.usuarios;

  constructor(private http: HttpClient) { 
    console.log(this.database);
    console.log(this.http);
  }

  public getDb() {
    
  }
}
