import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as DATABASE from '../assets/usuarios.json';
import { FormGroup } from '@angular/forms';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private db_url:string = "assets/usuarios.json";
  private database = DATABASE.usuarios;

  constructor(private http: HttpClient) {}

  public getDb() {
    return this.database;
  }

  public authenticate(form:FormGroup): boolean {
    let email = form.get('email').value;
    let password = form.get('password').value;
    
    for(let i = 0; i < this.database.length; i++ ){
      if(this.database[i].email == email ){
        if(this.database[i].senha == password){
          console.log('storage');
          this.storageUser(email, password);
          return true;
        } 
      }
    }
    
    return false;
  }

  private async storageUser(email, password){
    await Storage.set({
      key: 'user',
      value: JSON.stringify({email:email, password: password})
    })
  }

  public async checkUser() {
    const res = await Storage.get({key: 'user' });
    console.log(res);
    if(res){
      return true;
    } else {
      return false;
    }
  }


  private async getStorageUser(email){
    const res = await Storage.get({ key: 'user' });
    const user = JSON.parse(res.value);
  }

  private async removeStorageUser(email){
    await Storage.remove({ key: email })
  }

  private async clearStorageUser(){
    await Storage.clear();
  }

}
