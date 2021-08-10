import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-slide-product',
  templateUrl: './home-slide-product.component.html',
  styleUrls: ['./home-slide-product.component.scss'],
})
export class HomeSlideProductComponent implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 2.5,

  };
  constructor() { }
 
  ngOnInit() {}
 data = [
    {
      img : 'assets/img/p1.png',
      title: ' Sparkling wate',
      date: '24/02/2020',
      iconCheck:'assets/icon/icon-tick-active.svg',
      iconGS: 'assets/icon/icon-gs1.svg'
    },
    {
      img : 'assets/img/p2.png',
      title: ' Sparkling wate',
      date: '24/02/2020',
      iconCheck:'assets/icon/icon-tick-active.svg',
      iconGS: 'assets/icon/icon-gs1.svg'
    },
    {
      img : 'assets/img/p3.png',
      title: ' Sparkling wate',
      date: '24/02/2020',
      iconCheck:'assets/icon/icon-tick-active.svg',
      iconGS: 'assets/icon/icon-gs1.svg'
    },
    {
      img : 'assets/img/p1.png',
      title: ' Sparkling wate',
      date: '24/02/2020',
      iconCheck:'assets/icon/icon-tick-active.svg',
      iconGS: 'assets/icon/icon-gs1.svg'
    },
    {
      img : 'assets/img/p2.png',
      title: ' Sparkling wate',
      date: '24/02/2020',
      iconCheck:'assets/icon/icon-tick-active.svg',
      iconGS: 'assets/icon/icon-gs1.svg'
    },
    {
      img : 'assets/img/p3.png',
      title: ' Sparkling wate',
      date: '24/02/2020',
      iconCheck:'assets/icon/icon-tick-active.svg',
      iconGS: 'assets/icon/icon-gs1.svg'
    },
  ]
}
