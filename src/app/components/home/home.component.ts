import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Product } from '../../product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];

  constructor(private service: CommonService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((data: Product[])=>{
      console.log(data);
      this.products = data;
    })  
  }

}
