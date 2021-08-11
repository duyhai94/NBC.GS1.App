import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

const data  = {
  lastName:"hai",
  fristName:"hai",
  dob:"29/08/1998",
  gender:"Nam",
  phone:"123456789",
  email:"hai@.ci.com",
  city:"ha noi",
  district:"thanh xuan",
  wards:"khuong mai",
  address:"194 le trong tan",
}
@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.page.html',
  styleUrls: ['./profile-detail.page.scss'],
})
export class ProfileDetailPage implements OnInit {
  formProfile = new FormGroup({
      lastName:new FormControl(''),
      fristName:new FormControl(''),
      dob:new FormControl(''),
      gender:new FormControl(''),
      phone:new FormControl(''),
      email:new FormControl(''),
      city:new FormControl(''),
      district:new FormControl(''),
      wards:new FormControl(''),
      address:new FormControl(''),

  })
  constructor() { }

  ngOnInit() {
    this.formProfile.setValue(data);
  }
  onSave(){
    console.log(this.formProfile.value);
    
  }
}
