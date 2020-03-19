import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service.service';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { NetworkService } from '../services/network.service';

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
    private net:NetworkService
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
    
    this.net.getNetworkStatus();
    setInterval(() => {this.net.getNetworkStatus()}, 10000 )
  }

  public logout(){
    this.auth.clearStorageUser();
    this.router.navigate(['/']);
  }

}
