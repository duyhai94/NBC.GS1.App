import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  onBack(){
    this.router.navigate(['main/home'])
  }
}
