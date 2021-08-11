import { Injectable } from "@angular/core";
import { ModalController, ModalOptions } from "@ionic/angular";
import { ModaSuccessComponent } from "../base/moda-success/moda-success.component";

@Injectable({
    providedIn: 'root'
})

export class ModalService{
    constructor(
        private modalController: ModalController
    ){

    }

    async presentModal(config: ModalOptions) {
      const modal = await this.modalController.create(config);
      await modal.present();
      return modal;
    }
  
    async closeModal(data?) {
      await this.modalController.dismiss(data);
    }

      
}