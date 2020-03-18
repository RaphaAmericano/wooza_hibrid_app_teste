import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginGuard } from '../services/login.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'profile',
        children:[
          {
            path:'',
            loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule)
          }
        ]
      },
      {
        path: 'list',
        children:[
          {
            path:'',
            loadChildren: () => import('../list/list.module').then(m => m.ListModule)
          }
        ]
      },
      {
        path: 'item/:id',
        children:[
          {
            path:'',
            loadChildren: () => import('../list-item/list-item.module').then(m => m.ListItemModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/home/profile',
        pathMatch: 'full'
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class HomeRoutingModule { }
