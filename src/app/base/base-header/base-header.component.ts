import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-base-header',
  templateUrl: './base-header.component.html',
  styleUrls: ['./base-header.component.scss'],
})
export class BaseHeaderComponent implements OnInit {
@Input() headerTitle;
@Input() router;
buttonIcon = 'assets/icon/icon-back.svg'

  constructor() { }

  ngOnInit() {}

}
@NgModule({
    declarations: [BaseHeaderComponent],
    imports: [IonicModule,FormsModule,ReactiveFormsModule,CommonModule],
    exports: [BaseHeaderComponent]
})
export class BaseHeaderModule{}
