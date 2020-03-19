import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth-service.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public loginForm:FormGroup = new FormGroup({
    email: new FormControl(null,[Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required,  Validators.minLength(3)])
  });

  constructor(
    private authService: AuthService, 
    private router: Router,
    public alertController: AlertController) {}

  public submitLogin(){
    if(this.loginForm){
      let auth = this.authService.authenticate(this.loginForm);
      if(auth != false){
        this.router.navigate(['home/item/', auth ]);
        this.loginForm.reset();
      }
      else {
        this.invalidForm();
      }
    }
  }

  ngOnInit(){
    
  }

  async invalidForm() {
    const alert = await this.alertController.create({
      header: "Erro",
      subHeader: 'Formulário Inválido',
      message: 'Usuário inexistente',
      buttons: ['OK']
    })
    await  alert.present();
  }


}
