import { Component,OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  public electronics : any;
  public jewellery : any;
  public womenclothing : any;
  public menclothing : any;
  constructor(private api:ApiService){}

  ngOnInit(): void {
      this.getElectronics();
      this.getJewellery();
      this.getWomenClothing();
      this.getMenClothing();
      
  }
 
  getElectronics(){
    this.api.getProduct()
      .subscribe(res =>{
       this.electronics= res.filter((item:any) =>{
        return item.category =='electronics'
       })
  })
  }
  getJewellery(){
    this.api.getProduct()
    .subscribe(res =>{
     this.jewellery= res.filter((item:any) =>{
      return item.category =='jewelery'
     })
  })
}
getWomenClothing(){
  this.api.getProduct()
  .subscribe(res =>{
   this.womenclothing= res.filter((item:any) =>{
    return item.category =="women's clothing"
   })
})
}
getMenClothing(){
  this.api.getProduct()
  .subscribe(res =>{
   this.menclothing= res.filter((item:any) =>{
    return item.category =="men's clothing"
   })
})
}
}
