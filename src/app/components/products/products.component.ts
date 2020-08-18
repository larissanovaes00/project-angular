import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Product } from '../../product';
import { Router } from '@angular/router';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {

    products: Product[] = [];
    quantity: Number;
    total: Number;

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

    getAllProducts() {
        this.service.getAll().subscribe((data: Product[]) => {
            this.products = data;
            this.calculateTotal()
        })
    }

    onChange(id: number, product: Product, qty: number) {
        const updateProduct = {...product, price: product.price * qty, quantity: qty }
        return this.service.update(id, updateProduct)
        .subscribe(() => this.getAllProducts())
    }

    calculateTotal() {
        return this.total = this.products.reduce((sum, current) => sum += (current.price), 0);
    }
    
}
