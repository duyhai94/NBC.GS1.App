import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LocalStoregeService } from 'src/app/service/localstorege.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  back ;
  constructor(
    private router : Router,
    private alert : AlertController,
    private activeRouter: ActivatedRoute,
    private local: LocalStoregeService
  ) { }

  ngOnInit() {
     this.back = this.activeRouter.snapshot.params.back;
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
        link: '/main/profile/profile-detail'
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
        link: '/main/profile/profile-change'
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
        link: '/main/profile'

      }
    }
    
  }

  onLogout(){
      this.alertLogout()
    }


  async alertLogout() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Đăng xuất',
      message: 'Bạn có muốn đăng xuất tài khoản',
      buttons: [
        {
          text: 'Hủy',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Đăng xuất',
          handler: () => {
            this.local.del()
            this.router.navigateByUrl('main');

          }
        }
      ]
    });

    await alert.present();
  }
}
