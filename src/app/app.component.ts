import { ProductService } from './services/product-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'serempreTest';
  public productData: object;
  constructor(private productService: ProductService){ }

  ngOnInit(){
    this.productService.getProductInfo().subscribe(data=> this.productData=data)
    console.log(this.productData)
  }

}
