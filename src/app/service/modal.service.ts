import { Injectable } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ModaSuccessComponent } from "../base/moda-success/moda-success.component";

@Injectable({
    providedIn: 'root'
})

export class ModalService{
    constructor(
        private modalController: ModalController
    ){

    }

    async modaSuccess() {
        const modal = await this.modalController.create({
          component: ModaSuccessComponent,
          cssClass: 'my-custom-class'
        });
        return await modal.present();
      } 

      
}