import { HttpClient } from '@angular/common/http';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import {
  AfterViewInit,
  Component,
  NgZone,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { Browser } from '@capacitor/browser';

// import { Plugins } from '@capacitor/core';
import { LoadingController, Platform } from '@ionic/angular';
// const { BarcodeScanner, Browser } = Plugins;

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.page.html',
  styleUrls: ['./qr-code.page.scss'],
})
export class QrCodePage implements OnInit, AfterViewInit {
  scanActive = false;
  code = '';
  constructor(
    private zone: NgZone,
    private loading: LoadingController,
    private platform: Platform,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    // this.platform.backButton.subscribeWithPriority(1, () => {
    //   this.startScan();
    // });
  }

  ngAfterViewInit() {
    this.prepare();
    this.didUserGrantPermission();
    this.startScan();
  }
  ionViewDidLeave() {
    BarcodeScanner.showBackground();
  }
  searchItem() {
    this.presentLoading();
    this.http
      .get(
        'https://fgehlb1to6.execute-api.ap-southeast-1.amazonaws.com/prod/scan/product',
        {
          params: {
            productCode: this.code,
          },
        }
      )
      .subscribe(
        (res: any) => {
          console.log(res);
          this.loading.dismiss();
          if (!res.payload.ProductId) {
            alert('Sản phẩm này chưa được xác minh bởi GS1 Vietnam !');
          } else {
            this.openQrLink(
              'https://mbtt-client-bddb0.web.app/' + res.payload.ProductId
            );
          }
        },
        (err) => alert('Có lỗi xảy ra. Vui lòng thử lại!')
      );
  }

  openQrLink(link: string) {
    this.zone.runOutsideAngular(() => {
      Browser.open({
        url: link,
      }).then((a) => {
        console.log(a, 'url');
        // this.startScan();
      });
    });
  }

  async presentLoading() {
    const load = await this.loading.create({
      duration: 3000,
    });
    await load.present();
    return load;
  }

  startScan = async () => {
    BarcodeScanner.hideBackground(); // make background of WebView transparent

    const result = await BarcodeScanner.startScan(); // start scanning and wait for a result
    this.scanActive = true;
    // if the result has content
    if (result.hasContent) {
      this.presentLoading();
      console.log(result, 'ressult');

      if (
        result.content.startsWith('NBC') &&
        result.content.split('-').length == 2
      ) {
        const id = result.content.split('-')[1];
        this.stopScan();
        this.router.navigate(['main/product']);
      } else {
        alert('Sản phẩm này chưa được xác minh bởi GS1 Vietnam !');
        // this.http
        //   .get(
        //     'https://fgehlb1to6.execute-api.ap-southeast-1.amazonaws.com/prod/scan/product',
        //     {
        //       params: {
        //         productCode: result.content,
        //       },
        //     }
        //   )
        //   .subscribe(
        //     (res: any) => {
        //       console.log(res, 'no HTTP');
        //       this.loading.dismiss();
        //       if (!res.payload.ProductId) {
        //         alert('Sản phẩm này chưa được xác minh bởi GS1 Vietnam !');
        //       } else {
        //         this.openQrLink(
        //           'https://mbtt-client-bddb0.web.app/' + res.payload.ProductId
        //         );
        //       }
        //     },
        //     (err) => alert('Sản phẩm này chưa được xác minh bởi GS1 Vietnam !')
        //   );
      }
    }
  };

  stopScan = () => {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
  };

  prepare = () => {
    try {
      Browser.addListener('browserFinished', () => {
        this.startScan();
      });
    } catch (e) {
      console.log(e);
    } finally {
      this.startScan();
    }
    BarcodeScanner.prepare();
  };

  didUserGrantPermission = async () => {
    // check if user already granted permission
    const status = await BarcodeScanner.checkPermission({ force: true });

    if (status.granted) {
      // user granted permission
      return true;
    }

    if (status.denied) {
      // user denied permission
      return false;
    }

    if (status.asked) {
      // system requested the user for permission during this call
      // only possible when force set to true
    }

    if (status.neverAsked) {
      // user has not been requested this permission before
      // it is advised to show the user some sort of prompt
      // this way you will not waste your only chance to ask for the permission
      const c = confirm(
        'We need your permission to use your camera to be able to scan barcodes'
      );
      if (!c) {
        return false;
      }
    }

    if (status.restricted || status.unknown) {
      // ios only
      // probably means the permission has been denied
      return false;
    }

    // user has not denied permission
    // but the user also has not yet granted the permission
    // so request it
    const statusRequest = await BarcodeScanner.checkPermission({ force: true });

    if (statusRequest.asked) {
      // system requested the user for permission during this call
      // only possible when force set to true
    }

    if (statusRequest.granted) {
      // the user did grant the permission now
      return true;
    }
    // user did not grant the permission, so he must have declined the request
    return false;
  };
}
