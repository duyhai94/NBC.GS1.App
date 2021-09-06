import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { from, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { LocalStoregeService } from "src/app/service/localstorege.service";

@Injectable({
    providedIn: 'root'
})
export class CanActiveRouter implements CanActivate {

    constructor(
        private local: LocalStoregeService,
        public alertController: AlertController,
        private router: Router
    ) {}
    canActivate() : boolean | Observable<boolean> | Promise<boolean>{
        console.log(this.local.get('token'));
        
        return from(this.onAlertConfirm()).pipe(map(alert => {
            if(!this.local.get('token')){
                alert.present();
                return false;
            } else{
                return true

            }
        }));
            
    }
    async onAlertConfirm() {
        const alert = await this.alertController.create({
          mode: 'ios',
          cssClass: 'my-custom-class',
          header: 'Đăng nhập!',
          message: 'Bạn cần đăng nhập để xem chức nằng này',
          buttons: [
            {
              text: 'Hủy',
              role: 'cancel',
              cssClass: 'secondary',
              handler: (blah) => {
                console.log('Confirm Cancel: blah');
              }
            }, {
              text: 'Đăng nhập',
              handler: () => {
                  this.router.navigateByUrl('index/login');
              }
            }
          ]
        });
        // await alert.present();
        return alert;
      }
}