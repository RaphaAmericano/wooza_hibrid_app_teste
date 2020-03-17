import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public loginForm:FormGroup = new FormGroup({
    email: new FormControl(null,[Validators.required, Validators.minLength(3)]),
    password: new FormControl(null, [Validators.required, Validators.email])
  });

  constructor(private authService: AuthService) {}

  public submitLogin(){
    if(this.authService.authenticate(this.loginForm)){
      console.log('submit sucesso');
      //mensagem de retorno e router
    } else {
      //mensagem de retorno e limpar o formulario
    }
  }

  ngOnInit(){
    
  }

}
