import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-card',
  templateUrl: './base-card.component.html',
  styleUrls: ['./base-card.component.scss'],
})
export class BaseCardComponent implements OnInit {
  @Input() data;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {}
  routerDetail(ev){
      this.router.navigateByUrl('main/news/news-detail/'+ev);
  }

 
    
  
}
@NgModule({
  declarations: [BaseCardComponent],
  exports: [BaseCardComponent],
  imports: [CommonModule]
})
export class BaseCardModule{}