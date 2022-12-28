
import { Component,OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.scss']
})
export class ElectronicsComponent implements OnInit {
    public electronics: any;
    constructor(private api: ApiService){}

    ngOnInit(): void {
      this.api.getProduct()
      .subscribe(res =>{
       this.electronics= res.filter((item:any) =>{
        return item.category =='electronics'
       })
  })
    }
}
