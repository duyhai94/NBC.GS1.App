import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-base-header-nav',
  templateUrl: './base-header-nav.component.html',
  styleUrls: ['./base-header-nav.component.scss'],
})
export class BaseHeaderNavComponent implements OnInit {
  @Input() dataHeaderNav;
  backRouter;
  constructor(
    private router: Router,
    public activeRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.backRouter = this.router.url
    
    
  }

  routerToProfile(){
    this.router.navigate(['main/profile',{back : this.backRouter}]);
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