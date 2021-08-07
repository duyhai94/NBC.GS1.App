import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-load-app',
  templateUrl: './load-app.page.html',
  styleUrls: ['./load-app.page.scss'],
})
export class LoadAppPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigateByUrl('index/login');

    },1000)
  }



}
