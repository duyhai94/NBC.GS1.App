import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-slide-news',
  templateUrl: './home-slide-news.component.html',
  styleUrls: ['./home-slide-news.component.scss'],
})
export class HomeSlideNewsComponent implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 2.1,
  };
  constructor() { }

  ngOnInit() {}

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
