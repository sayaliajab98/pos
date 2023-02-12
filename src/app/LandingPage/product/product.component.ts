import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any;
  showTable: boolean = false;
  count: any=1;
  quantity=1;
  selecteditem:any;

  constructor(private productService:ProductsService) { }

  ngOnInit(): void { 
    this.getproductdetails();  
  }

  toggleShowTable(): void {
    this.showTable = true;
}

  getproductdetails(){
    this.productService. getproduct().subscribe((responce:any)=>{
    this.products = responce;
   console.log(this.products)
  })
}

// getproduct(name: any,index:any){
// alert(name);
// var currentElement = this.products[index];  
// this.products.splice(index, 0, currentElement);
// }

  addProduct(index: string | number) {
    var currentElement = this.products[index];  
    this.products.splice( 0, currentElement);
  }
  clickCount(){
    this.count++;
  }
  IncquantityCount(){
    this.quantity++;
  }
  DecquantityCount(){
    this.quantity--;
  }

  addRow(item: {name: string; items: string;}): void {
    this.selecteditem = item;
    console.log(this.selecteditem);
    if(this.count==1)
    {
    this.products.push(this.selecteditem);
    }
    else
    {
      this.quantity++;
    }
 }

  }
  


