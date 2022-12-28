
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
   public product: any;
    id:any;
    public totalitems: number=0;
   constructor(private route:ActivatedRoute, 
    private api:ApiService,
    private cartService:CartService){}
   


   ngOnInit(): void {
       this.id=this.route.snapshot.params['id'];
       this.getelectronicproduct();
   }

   getelectronicproduct(){
    this.api.getelectronicproduct(this.id).subscribe(res=>{
      this.product=res;
      
       Object.assign(this.product,{quantity:1,total:this.product.price});
    })
   }  
   AddToCart(item:any){
       this.cartService.addtoCart(item);
   }
  }
