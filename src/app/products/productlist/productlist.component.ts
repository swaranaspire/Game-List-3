import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  public productdata:any=[];
  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    this.productsService.getproductdata().subscribe((data:any)=>
    {
      this.productdata=data.productlist;
    })
  }

}
