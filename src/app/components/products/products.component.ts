import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Product } from '../../product';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {

  products: Product[] = [];
  quantity: Number;

  constructor(
    private service: CommonService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getAllProducts()
  }

  deleteProduct(id: number) {
    this.service.delete(id).subscribe(() => {
      this.getAllProducts()
    })
  }

  getAllProducts(){
    this.service.getAll().subscribe((data: Product[])=>{
      this.products = data;
    })
  }

  onChange(id: number, quantity: number) {
    
    console.log(quantity);
    console.log(id);
  }

}
