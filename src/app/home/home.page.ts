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
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Invalid QR Code!',
      subHeader: 'Try Again!',
      message: 'You have scanned an invalid QR!',
      buttons: ['OK']
    });
    await alert.present();
  }
  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.qrData = barcodeData.text;
      if (!this.qrData.includes(this.checkString)) {
        this.presentAlert();
      } else {
        this.scannedCode = this.qrData;
      }
    });
  }
}
