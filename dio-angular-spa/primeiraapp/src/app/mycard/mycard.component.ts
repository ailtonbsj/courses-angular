import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'spa-mycard',
  templateUrl: './mycard.component.html',
  styleUrls: ['./mycard.component.css']
})
export class MycardComponent implements OnInit {

  @Input() description = '';
  @Input('amount') totalLikes = 10;
  @Input() name = '';
  @Input() pic = '';

  @Output() share = new EventEmitter<{ name: string, likes: number }>();

  constructor() { }

  ngOnInit(): void {
  }

  onLike() {
    this.totalLikes = this.totalLikes + 1;
  }

  onShare(cardName: string, likes: number) {
    this.share.emit({
      name: cardName,
      likes
    });
  }

}
