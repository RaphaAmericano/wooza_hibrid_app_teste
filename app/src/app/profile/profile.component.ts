import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service.service';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  public usuario: User;

  constructor(private auth:AuthService, private router:Router) { 
    
  }

  ngOnInit() {
    this.auth.getUser().subscribe(
      (res) => this.usuario = res 
    )
  }

  public logout(){
    this.auth.clearStorageUser().then(
      () => this.router.navigate(['/'])
    );
  }

}
