import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'zippy',
  template: `
  <div class="zippy">
    <button (click)="toggle()">Toggle</button>
    <div [hidden]="!visible">
      <ng-content></ng-content>
    </div>
  </div>`
})
export class ZippyComponent {
  visible = true;
  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();
  toggle() {
    this.visible = !this.visible;
    if (this.visible) this.open.emit(null);
    else this.close.emit(null);
  }
}
