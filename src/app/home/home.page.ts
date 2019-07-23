import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  qrData = null;
  scannedCode = null;
  checkString = 'gis.lk/result?';

  constructor(
    private barcodeScanner: BarcodeScanner,
    private alertController: AlertController
  ) {}
  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
      if (!this.scannedCode.includes(this.checkString)) {
        this.scannedCode = 'invalid';
      }
    });
  }
}
