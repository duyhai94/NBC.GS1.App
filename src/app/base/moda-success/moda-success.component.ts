import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-moda-success',
  templateUrl: './moda-success.component.html',
  styleUrls: ['./moda-success.component.scss'],
})
export class ModaSuccessComponent implements OnInit {
  @Input() img;
  @Input() content1;
  @Input() content2;

  constructor(
    private router: Router,
    private modalController : ModalController
  ) { }

  ngOnInit( ) {}

  onBack(){
    this.modalController.dismiss();
    this.router.navigateByUrl('index/login');
  }

}
@NgModule({
  declarations: [ModaSuccessComponent],
  imports: [CommonModule,IonicModule],
  exports : [ModaSuccessComponent]
})
export class ModaSuccessModule{}
