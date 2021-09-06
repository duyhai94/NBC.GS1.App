import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home-slide-product',
  templateUrl: './home-slide-product.component.html',
  styleUrls: ['./home-slide-product.component.scss'],
})
export class HomeSlideProductComponent implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 3,
    

  };
  constructor(
    private router: Router
  ) { }
 
  ngOnInit() {}
  onRouterTo(ev){
    this.router.navigate(['main/product',{verify:ev}]);
  }
  data = [
    {
      img : 'assets/img/p1.png',
      title: 'Sparkling water',
      date: 'Nestle Vietnam',
      iconCheck:'assets/icon/icon-tick-active.svg',
      iconGS: 'assets/icon/icon-gs1.svg',
      tick: true,
      verify: true
    },
    {
      img : 'assets/img/p2.png',
      title: 'Sparkling water',
      date: 'Nestle Vietnam',
      iconCheck:'assets/icon/icon-tick-active.svg',
      iconGS: 'assets/icon/icon-gs1.svg',
      tick: true,
      verify: true
    },
    {
      img : 'assets/img/p3.png',
      title: 'Sparkling water',
      date: 'Nestle Vietnam',
      iconCheck:'assets/icon/icon-tick-active.svg',
      iconGS: 'assets/icon/icon-gs1.svg',
      tick: true,
      verify: true
    },
    {
      img : 'assets/img/p1.png',
      title: 'Sparkling water',
      date: 'Nestle Vietnam',
      iconCheck:'assets/icon/icon-tick-active.svg',
      iconGS: 'assets/icon/icon-gs1.svg',
      tick: true,
      verify: true
    },
    {
      img : 'assets/img/p2.png',
      title: 'Sparkling water',
      date: 'Nestle Vietnam',
      iconCheck:'assets/icon/icon-tick-active.svg',
      iconGS: 'assets/icon/icon-gs1.svg',
      tick: true,
      verify: true
    },
    {
      img : 'assets/img/p3.png',
      title: 'Sparkling water',
      date: 'Nestle Vietnam',
      iconCheck:'assets/icon/icon-tick-active.svg',
      iconGS: 'assets/icon/icon-gs1.svg',
      tick: true,
      verify: true
    },
  ]
}
@NgModule({
  declarations: [HomeSlideProductComponent],
  imports: [CommonModule,IonicModule,],
  exports: [HomeSlideProductComponent]

})
export class HomeSlideProductModule{}
