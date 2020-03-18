import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { 
    console.log('profile');
  }

  ngOnInit() {}

  public logout(){
    console.log('logout');
    this.auth.clearStorageUser();
    this.router.navigate(['/']);
  }

}
