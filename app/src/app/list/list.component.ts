import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  public user: User;

  public list_users:User[] = [];

  constructor(
    private auth:AuthService, 
    private router: Router) { }

  ngOnInit() {
    this.auth.getUser().subscribe(
      (res) => {
        this.user = res;
        console.log(this.user);
    });
    this.list_users = this.auth.getDb();
    console.log(this.list_users);
  }

  public logout(){
    console.log('logout');
    this.auth.clearStorageUser();
    this.router.navigate(['/']);
  }

}
