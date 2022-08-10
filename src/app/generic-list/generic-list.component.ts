import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.css']
})
export class GenericListComponent implements OnInit, OnChanges {

  @Input() items: any = [];  
  public keys:string[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.keys = Object.keys(this.items[0]);
  }

  ngOnInit(): void {
  }

}
