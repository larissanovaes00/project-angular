import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

    productForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private commonService: CommonService
    ) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
        name: [''],
        description: [''],
        price: [''],
        quantity: [''],    
      })
  }

  submitForm() {
    this.commonService.create(this.productForm.value).subscribe(res => {
      console.log('Product created!')
      this.router.navigateByUrl('produtos')
    })

  }
}
