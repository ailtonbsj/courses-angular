import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';

enum AlertTypes {
  DANGER = 'danger',
  SUCCESS = 'success'
}

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  showAlert(message: string, type: AlertTypes) {
    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;
    return bsModalRef.onHide;
  }

  showAlertDanger(message: string) {
    this.showAlert(message, AlertTypes.DANGER);
  }

  showAlertSuccess(message: string) {
    return this.showAlert(message, AlertTypes.SUCCESS);
  }

  showConfirm(title: string, msg: string, okTxt?: string, cancelTxt?: string): Subject<boolean> {
    const bsModalRef: BsModalRef = this.modalService.show(ConfirmModalComponent);
    bsModalRef.content.title = title;
    bsModalRef.content.msg = msg;
    if (okTxt) bsModalRef.content.okTxt = okTxt;
    if (cancelTxt) bsModalRef.content.cancelTxt = cancelTxt;
    return (<ConfirmModalComponent>bsModalRef.content).confirmResult;
  }

  constructor(private modalService: BsModalService) { }

}
