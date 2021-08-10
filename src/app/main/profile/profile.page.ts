import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  dataTitle = {
    profile : {
      left: {
        show : true,
        icon : 'assets/icon/icon-person.svg',
        text: 'Thông tin cá nhân'
      },
      right: {
        show : true,
        icon: 'assets/icon/icon-arrow.svg',
        link: '/main/profile-detail'
      }
    },
    changePass : {
      left: {
        show : true,
        icon : 'assets/icon/icon-password.svg',
        text: 'Đổi mật khẩu'
      },
      right: {
        show : true,
        icon: 'assets/icon/icon-arrow.svg',
        link: '/main/profile-change'
      }
    },
    logout : {
      left: {
        show : true,
        icon : 'assets/icon/icon-logout.svg',
        text: 'Đăng xuất'
      },
      right: {
        show : false,
        icon: 'assets/icon/icon-logout.svg',
      
      }
    }
    
  }
}
