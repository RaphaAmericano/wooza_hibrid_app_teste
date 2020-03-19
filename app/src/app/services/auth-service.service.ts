import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as DATABASE from '../assets/usuarios.json';
import { FormGroup } from '@angular/forms';
import { Plugins } from '@capacitor/core';
import { User } from '../models/user';
import { Platform } from '@ionic/angular';
import { StorageToken } from '../models/storage-token';


const { Storage } = Plugins;
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private database = DATABASE.usuarios;
  public usuario: BehaviorSubject<User> = new BehaviorSubject(null);

  constructor( 
    private platform: Platform) {
    this.platform.ready().then(
      () => {
        this.getStorageUser().then(
          (res) => {
              this.usuario.next(res);
            }
        )
      }
    )
    
  }

  public getUser() {
    return this.usuario;
  }

  public getDb() {
    return this.database;
  }

  public authenticate(form:FormGroup): number | boolean{
    let email = form.get('email').value;
    let password = form.get('password').value;
    
    for(let i = 0; i < this.database.length; i++ ){
      if(this.database[i].email === email ){
        if(this.database[i].senha === password){
          this.storageUser(email, password);
          let user = new User();
          user.cpf = this.database[i].cpf;
          user.dataNascimento = this.database[i].dataNascimento;
          user.email = this.database[i].email;
          user.nome = this.database[i].nome;
          user.id = i;
          this.usuario.next(user);
          return i;
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

  private searchInDB(user){
    let storage = Object.assign(new StorageToken(), user);
    console.log('search', storage, user);
    for(let i = 0; i < this.database.length; i++){
      if(storage.email === this.database[i].email){
        if(storage.senha === this.database[i].senha){
          let user = new User();
          user.cpf = this.database[i].cpf;
          user.dataNascimento = this.database[i].dataNascimento;
          user.email = this.database[i].email;
          user.nome = this.database[i].nome;
          // this.usuario.next(user);
          console.log('loop get',user, i);
          return user;
        }
      }
    }
  }

  private async getStorageUser(){
    const res = await Storage.get({ key: 'user' });
    const storage = await Object.assign(new User(), JSON.parse(res.value));
    return storage;
  }

  private async removeStorageUser(){
    this.usuario = undefined;
    await Storage.remove({ key: 'user' });
  }

  public async clearStorageUser(){
    this.usuario.next(null);
    await Storage.clear();
  }

  public getAuthUserObserver(): Observable<User> {
    return this.usuario.asObservable();
  }

}
