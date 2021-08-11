import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-base-alert',
  templateUrl: './base-alert.component.html',
  styleUrls: ['./base-alert.component.scss'],
})
export class BaseAlertComponent implements OnInit {
  @Input() title  : string;
  @Input() content: string;
  @Input() type:number;
  @Input() id: number;
  constructor(
    private modalService : ModalService,
    private modalController: ModalController

  ) { }

  ngOnInit() {}
  onSubmit(){
    console.log(this.id,this.type);
    switch(this.type){
      case 1:
      console.log("Love");
      this.modalController.dismiss();

      break;
      case 2: 
      console.log("Delete");
      this.modalController.dismiss();

      break;
        
        
    }
    
  }
  onClose(){
      this.modalController.dismiss();
  }
}
