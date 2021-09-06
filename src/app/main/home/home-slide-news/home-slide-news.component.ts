import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    slidesPerView: 2.1,
  };
  constructor(
    private router: Router
  ) { }

  data = [
    {
      id:1,
      img : 'assets/img/p1.png',
      title: 'Hà Nội: Sẽ bắt buộc truy xuất nguồn gốc nông sản',
      date: '24/02/2020'
   

    },
    {
      id:2,

      img : 'assets/img/p1.png',
      title: 'Hà Nội: Sẽ bắt buộc truy xuất nguồn gốc nông sản',
      date: '24/02/2020'
    },
    {
      id:3,

      img : 'assets/img/p1.png',
      title: 'Hà Nội: Sẽ bắt buộc truy xuất nguồn gốc nông sản',
      date: '24/02/2020'
    },
    {
      id:4,

      img : 'assets/img/p1.png',
      title: 'Hà Nội: Sẽ bắt buộc truy xuất nguồn gốc nông sản',
      date: '24/02/2020'
    },
    {
      id:5,

      img : 'assets/img/p1.png',
      title: 'Hà Nội: Sẽ bắt buộc truy xuất nguồn gốc nông sản',
      date: '24/02/2020'
    },
    {
      id:6,

      img : 'assets/img/p1.png',
      title: 'Hà Nội: Sẽ bắt buộc truy xuất nguồn gốc nông sản',
      date: '24/02/2020'
    },
  ]
  onRouterNews(id){
    // this.router.navigateByUrl('main/news/news-detail/'+id);
  }
  
}
@NgModule({
  declarations: [HomeSlideNewsComponent],
  exports: [HomeSlideNewsComponent],
  imports: [CommonModule,IonicModule]
})
export class  HomeSlideNewsModule{}