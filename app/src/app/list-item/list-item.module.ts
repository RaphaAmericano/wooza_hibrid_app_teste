import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ListItemComponent } from './list-item.component';



@NgModule({
  declarations: [ListItemComponent],
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild([{path:'', component:ListItemComponent}])
  ]
})
export class ListItemModule { }
