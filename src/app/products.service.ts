import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _url:string ="/assets/genric.json";
  constructor(private http:HttpClient) { }
  getproductdata(){
    return this.http.get(this._url)
  }
}
