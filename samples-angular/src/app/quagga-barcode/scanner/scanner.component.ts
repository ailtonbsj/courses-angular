import { Component, OnInit } from '@angular/core';
import Quagga from '@ericblade/quagga2';
import { getMainBarcodeScanningCamera } from './camera-access';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements OnInit {

  codes: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.initScanner();
  }

  private initScanner() {
    if (!navigator.mediaDevices || !(typeof navigator.mediaDevices.getUserMedia === 'function')) {
      throw new Error('getUserMedia is not supported. Please use Chrome on Android or Safari on iOS');
    }

    return Quagga.CameraAccess.enumerateVideoDevices()
      .then(mediaDeviceInfos => {
        const mainCamera = getMainBarcodeScanningCamera(mediaDeviceInfos);
        if (mainCamera) {
          console.log(`Using ${mainCamera.label} (${mainCamera.deviceId}) as initial camera`);
          return this.initScannerWithDevice(mainCamera.deviceId);
        } else {
          console.error(`Unable to determine suitable camera, will fall back to default handling`);
          return this.initScannerWithDevice(undefined);
        }
      })
      .catch(error => {
        throw new Error(`Failed to enumerate devices: ${error}`)
      });
  }

  private initScannerWithDevice(preferredDeviceId: string | undefined) {
    const constraints: MediaTrackConstraints = {};
    if (preferredDeviceId) {
      // if we have a specific device, we select that
      constraints.deviceId = preferredDeviceId;
    } else {
      // otherwise we tell the browser we want a camera facing backwards (note that browser does not always care about this)
      constraints.facingMode = 'environment';
    }

    return Quagga.init({
      inputStream: {
        type: 'LiveStream',
        constraints,
        // area: { // defines rectangle of the detection/localization area
        //   top: '25%',    // top offset
        //   right: '10%',  // right offset
        //   left: '10%',   // left offset
        //   bottom: '25%'  // bottom offset
        // },
        target: document.querySelector('#scanner') ?? undefined
      },
      decoder: {
        readers: [
          'ean_reader', //EAN-13
          // 'ean_8_reader', EAN-8
          // 'upc_e_reader', UPC-E
          'code_39_reader', // Code 39
          // 'codabar_reader', Codabar
          'code_128_reader', // Code 128
          // 'i2of5_reader', Interleaved 2 of 5
        ],
        multiple: false
      },
      locate: false // See: https://github.com/ericblade/quagga2/blob/master/README.md#locate
    }, (err) => {
      if (err) {
        throw new Error(`Quagga initialization failed: ${err}`);
      } else {
        console.log(`Quagga initialization succeeded`);
        Quagga.start();
        Quagga.onDetected((res) => {
          if (res.codeResult.code) this.onBarcodeScanned(res.codeResult.code);
        });
      }
    });
  }

  private onBarcodeScanned(code: string) {
    const hasInputed = this.codes.find(v => v === code);
    if (!hasInputed) {
      this.codes.push(code);
    }
  }

}
