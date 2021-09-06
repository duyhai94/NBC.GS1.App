import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  dataHeaderNav = {
    logo : {
      icon : null,
      text : 'Liên hệ'
    },
    list: {
      profile : true,
      favourite : false
    }
  }

  constructor() { }

  ngOnInit() {
    console.log("aaa");
    
  }

}
