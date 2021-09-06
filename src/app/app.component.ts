import { Component, OnInit } from '@angular/core';
import { LocalStoregeService } from './service/localstorege.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  checkToken: boolean;
  constructor(
    private local: LocalStoregeService,
  ) {}
  
  ngOnInit(){
   
  }
}
