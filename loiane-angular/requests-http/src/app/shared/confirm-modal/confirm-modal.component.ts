import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { of, Subject } from 'rxjs';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

  @Input() title = '';
  @Input() msg = '';
  @Input() cancelTxt = 'Cancelar';
  @Input() okTxt = 'Sim';

  confirmResult: Subject<boolean> = new Subject();

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  onClose() {
    this.confirmResult.next(false);
    this.bsModalRef.hide();
  }

  onConfirm() {
    this.confirmResult.next(true);
    this.bsModalRef.hide();
  }

}
