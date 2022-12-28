import { Component,OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  public totalitems: number=0;
  constructor(private cartService:CartService){}

  ngOnInit(): void {
      this.cartService.getProduct()
      .subscribe(res=>{
          this.totalitems=res.length;
      })
  }

  ClearCart(){
    this.cartService.removeAllCart();
  }
}
