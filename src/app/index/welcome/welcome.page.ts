import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage   {

  @ViewChild('slides') slider: any;
  activeIndex;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };
  clickedNext = true;
  currentIndex = 0;
  constructor(private router: Router) {}

  async getActive(ev?) {
    console.log(ev);

    if (this.slider) {
      this.slider.slideNext();
      this.activeIndex.emit(await this.slider.getActiveIndex());
    }
  }

  loginFake() {
    localStorage.setItem('is_login', 'true');
    this.router.navigate(['/home']);
  }

}
