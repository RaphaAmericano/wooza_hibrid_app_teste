import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service.service';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  usuario:User;

  constructor(private auth:AuthService, private router: Router) { }

  ngOnInit() {
    this.auth.getUser().subscribe(
      (res) => {
        this.usuario = res;
        console.log( this.usuario  )
      }
    );
  }

  public logout(){
    console.log('logout');
    this.auth.clearStorageUser();
    this.router.navigate(['/']);
  }

}
