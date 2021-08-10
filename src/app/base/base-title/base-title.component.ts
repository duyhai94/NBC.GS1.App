import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-title',
  templateUrl: './base-title.component.html',
  styleUrls: ['./base-title.component.scss'],
})
export class BaseTitleComponent  {
  @Input() dataTitle;
  constructor(
    private router: Router
  ) { }


  routeTO(ev){
      this.router.navigateByUrl(ev);
  }

}
@NgModule({
  declarations: [BaseTitleComponent],
  imports: [CommonModule],
  exports: [BaseTitleComponent]
})
export class BaseTitleModule{}