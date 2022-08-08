import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {
 public userdata:any=[];
  constructor(private userService:UserService) { 
   
   
  }
 

  ngOnInit(): void {
    this.userService.getuserdata().subscribe((data:any)=>
    {
      // console.log(data.userlist)
      this.userdata=data.userlist;
      
    })
  }

}
