import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-card-profile',
  templateUrl: './base-card-profile.component.html',
  styleUrls: ['./base-card-profile.component.scss'],
})
export class BaseCardProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
@NgModule({
  declarations: [BaseCardProfileComponent],
  exports :[BaseCardProfileComponent],
  imports: [CommonModule]
})
export class BaseCardProfileModule{}