import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GameactivityComponent } from './gameactivity/gameactivity.component';
import { ProductlistComponent } from './products/productlist/productlist.component';
import { TeamsComponent } from './teams/teams.component';
import { AllusersComponent } from './user/allusers/allusers.component';
import { UserregistrationComponent } from './user/userregistration/userregistration.component';

const routes: Routes = [
  {path:'', component:DashboardComponent, children:[
      {path:'gameactivity', component:GameactivityComponent},
      {path:'teams', component:TeamsComponent},
      {path:'userregistration', component:UserregistrationComponent},
      {path:'allusers', component:AllusersComponent},
      {path:'productlist',component:ProductlistComponent}
    ]


  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
