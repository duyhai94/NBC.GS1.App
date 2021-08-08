import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {
  formForgot = new FormGroup ({
      Phone: new FormControl("")
    })
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  btnForgot(){
    this.router.navigateByUrl('index/otp/2')
  }
}
