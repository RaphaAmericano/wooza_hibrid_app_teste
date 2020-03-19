import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service.service';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { NetworkService } from '../services/network.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  usuario:User;

  constructor(
    private auth:AuthService, 
    private router: Router,
    private net:NetworkService,
    private platform:Platform
    ) { }

  ngOnInit() {
    this.auth.getUser().subscribe(
      (res) => {
        if(res != null ){
          this.usuario = res;
        } else {
          this.router.navigate(['/'])
        }
      }
    );
    if(this.platform.is('ios') || this.platform.is('android')){
      this.net.getNetworkStatus();
    }
    setInterval(() => {this.net.getNetworkStatus()}, 10000 )
  }

  public logout(){
    this.auth.clearStorageUser().then(
      () => this.router.navigate(['/'])
    );
  }

}
