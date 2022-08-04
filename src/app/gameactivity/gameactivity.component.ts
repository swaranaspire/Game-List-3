import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameactivityService } from '../gameactivity.service';

@Component({
  selector: 'app-gameactivity',
  templateUrl: './gameactivity.component.html',
  styleUrls: ['./gameactivity.component.css']
})
export class GameactivityComponent implements OnInit {
  componentName="gameactivity";
    public column: string ='';
    public order: string ='';
    public filterTerm: string = '';
    public selectedPagedNumber : number=0;
  page(pageNumber:number){
    this.selectedPagedNumber=pageNumber;
    this.gameactivityservice.getPagedData(pageNumber).subscribe((data:any)=>{this.allMembers=data;})
  }
  previous(){this.page(this.selectedPagedNumber-1);}
  next(){this.page(this.selectedPagedNumber+1);}
  sort(){
    this.gameactivityservice.getSortedData(this.column,this.order).subscribe((data:any)=>{this.allMembers=data;},)}
  filter(){
    this.gameactivityservice.getFilteredData(this.filterTerm).subscribe((data:any)=>{this.allMembers =data;});}

  delete(){
    this.gameactivityservice.deleteMember().subscribe((data: any) => {alert('success'), location.reload();},
    (error:any) => {alert('internal server error');});
  }
  public allMembers: any =[];
  constructor(private gameactivityservice: GameactivityService,router:Router) {
    this.gameactivityservice.getteammember().subscribe(
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
