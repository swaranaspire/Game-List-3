import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamsserviceService } from '../teamsservice.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  componentName="teams";
  public column: string ='';
  public order: string ='';
  public filterTerm: string = '';
  public selectedPagedNumber : number=0;
page(pageNumber:number){
  this.selectedPagedNumber=pageNumber;
  this.teamsservice.getPagedData(pageNumber).subscribe((data:any)=>{this.allMembers=data;})
}
previous(){this.page(this.selectedPagedNumber-1);}
next(){this.page(this.selectedPagedNumber+1);}
sort(){
  this.teamsservice.getSortedData(this.column,this.order).subscribe((data:any)=>{this.allMembers=data;},)}
filter(){
  this.teamsservice.getFilteredData(this.filterTerm).subscribe((data:any)=>{this.allMembers =data;});}

delete(){
  this.teamsservice.deleteMember().subscribe((data: any) => {alert('success'), location.reload();},
  (error:any) => {alert('internal server error');});
}
public allMembers: any =[];
constructor(private teamsservice: TeamsserviceService,router:Router) {
  this.teamsservice.getteammember().subscribe(
    (data: any) => {console.warn("data",data.Team) 
      this.allMembers = data.Team;},
    (error: any) => {alert('internal server error')}
  )
 }
  public member: any=[];
  save(member:any){
    this.member=member;
  }
ngOnInit(): void {
}


}
