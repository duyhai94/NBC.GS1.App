import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home-slide-news',
  templateUrl: './home-slide-news.component.html',
  styleUrls: ['./home-slide-news.component.scss'],
})
export class HomeSlideNewsComponent {
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 2.5,
  };
  constructor() { }

  data = [
    {
      img : 'assets/img/p1.png',
      title: 'Hà Nội: Sẽ bắt buộc truy xuất nguồn gốc nông sản',
      date: '24/02/2020'
   

    },
    {
      img : 'assets/img/p1.png',
      title: 'Hà Nội: Sẽ bắt buộc truy xuất nguồn gốc nông sản',
      date: '24/02/2020'
    },
    {
      img : 'assets/img/p1.png',
      title: 'Hà Nội: Sẽ bắt buộc truy xuất nguồn gốc nông sản',
      date: '24/02/2020'
    },
    {
      img : 'assets/img/p1.png',
      title: 'Hà Nội: Sẽ bắt buộc truy xuất nguồn gốc nông sản',
      date: '24/02/2020'
    },
    {
      img : 'assets/img/p1.png',
      title: 'Hà Nội: Sẽ bắt buộc truy xuất nguồn gốc nông sản',
      date: '24/02/2020'
    },
    {
      img : 'assets/img/p1.png',
      title: 'Hà Nội: Sẽ bắt buộc truy xuất nguồn gốc nông sản',
      date: '24/02/2020'
    },
  ]
  
}
@NgModule({
  declarations: [HomeSlideNewsComponent],
  exports: [HomeSlideNewsComponent],
  imports: [CommonModule,IonicModule]
})
export class  HomeSlideNewsModule{}