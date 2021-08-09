import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-base-header-nav',
  templateUrl: './base-header-nav.component.html',
  styleUrls: ['./base-header-nav.component.scss'],
})
export class BaseHeaderNavComponent implements OnInit {
  @Input() dataHeaderNav;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  routerToProfile(){
    this.router.navigateByUrl('main/profile');
  }
  routerToFavourite(){
    this.router.navigateByUrl('main/favourite')
  }
}
@NgModule({
  declarations: [BaseHeaderNavComponent],
  imports: [CommonModule,IonicModule],
  exports: [BaseHeaderNavComponent]
})
export class BaseHeaderNavModule{}