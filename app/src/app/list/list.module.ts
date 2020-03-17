import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ListComponent],
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild([{path:'', component:ListComponent }])
  ]
})
export class ListModule { }
