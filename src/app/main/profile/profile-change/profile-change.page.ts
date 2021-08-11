import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-change',
  templateUrl: './profile-change.page.html',
  styleUrls: ['./profile-change.page.scss'],
})
export class ProfileChangePage implements OnInit {
  showPass1 = true;
  showPass2 = true;
  formReset = new FormGroup({
    oldPassword: new FormControl(''),
    newPassword: new FormControl(''),
    confPassword: new FormControl('')
  })
  constructor() { }

  ngOnInit() {
  }
  btnReset(){
    console.log(this.formReset.value);
    
  }
  btnTogglePassword(ev) {
    switch (ev) {
      case 1:
        this.showPass1 = !this.showPass1;
        break;
      case 2:
        this.showPass2 = !this.showPass2;
        break;
    }
  }
}
