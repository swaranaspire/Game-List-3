import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { AllusersComponent } from './allusers/allusers.component';



@NgModule({
  declarations: [
    UserregistrationComponent,
    AllusersComponent
  ],
  imports: [
    CommonModule,
    UserModule
  ]
})
export class UserModule { }
