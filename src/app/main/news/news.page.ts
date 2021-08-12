import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  dataHeaderNav = {
    logo : {
      icon : null,
      text : 'Tin tức'
    },
    list: {
      profile : true,
      favourite : false
    }
  }
  dataCard = [
    {
      id: 1,
      title: ' Hà Nội: Sẽ bắt buộc truy xuất nguồn gốc nông sản',
      header: '  Thị trường - Tiêu dùng',
      date: ' 24/02/2020',
      img: 'assets/img/s4.png',
      content: 'Sau hơn 3 năm triển khai, Hà Nội đã hoàn thiện thủ tục quản lý và'
    },
    {
      id: 2,
      title: ' Hà Nội: Sẽ bắt buộc truy xuất nguồn gốc nông sản',
      header: '  Thị trường - Tiêu dùng',
      date: ' 24/02/2020',
      img: 'assets/img/s4.png',
      content: 'Sau hơn 3 năm triển khai, Hà Nội đã hoàn thiện thủ tục quản lý và'
    },  
    {
      id: 3,
      title: ' Hà Nội: Sẽ bắt buộc truy xuất nguồn gốc nông sản',
      header: '  Thị trường - Tiêu dùng',
      date: ' 24/02/2020',
      img: 'assets/img/s4.png',
      content: 'Sau hơn 3 năm triển khai, Hà Nội đã hoàn thiện thủ tục quản lý và'
    },  
    {
      id: 4,
      title: ' Hà Nội: Sẽ bắt buộc truy xuất nguồn gốc nông sản',
      header: '  Thị trường - Tiêu dùng',
      date: ' 24/02/2020',
      img: 'assets/img/s4.png',
      content: 'Sau hơn 3 năm triển khai, Hà Nội đã hoàn thiện thủ tục quản lý và'
    },  
    {
      id: 5,
      title: ' Hà Nội: Sẽ bắt buộc truy xuất nguồn gốc nông sản',
      header: '  Thị trường - Tiêu dùng',
      date: ' 24/02/2020',
      img: 'assets/img/s4.png',
      content: 'Sau hơn 3 năm triển khai, Hà Nội đã hoàn thiện thủ tục quản lý và'
    }
  ]
  segmentModel;
  constructor() { }

  ngOnInit() {
  }

  segmentChanged(ev: any){
      console.log("sdasdas",ev);
      
  }

}
