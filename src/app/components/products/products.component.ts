import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Product } from '../../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private service: CommonService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((data: Product[])=>{
      this.products = data;
    })
  }
}
