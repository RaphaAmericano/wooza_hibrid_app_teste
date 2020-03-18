import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../services/auth-service.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {

  public usuario:User;

  constructor(private route: ActivatedRoute, private auth:AuthService) { }

  ngOnInit() {
    console.log(this.route);
  }

}
