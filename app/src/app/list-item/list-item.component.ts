import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../services/auth-service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {

  public usuario:User = null;

  constructor(private route: ActivatedRoute,
    private auth:AuthService, private navCtrl: NavController) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.usuario = Object.assign(new User(), this.auth.getDb()[id]);
    this.usuario.id = id;
    console.log(this.usuario);
  }

  public returnLastPage(){
    this.navCtrl.back();
  }

}
