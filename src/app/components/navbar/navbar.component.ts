import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  posts: [] = [] ;

  constructor(private serviceApi: CommonService) { }

  ngOnInit(): void {
    
  }

}
