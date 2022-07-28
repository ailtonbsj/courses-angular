import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spa-event-emitters',
  templateUrl: './event-emitters.component.html',
  styleUrls: ['./event-emitters.component.css']
})
export class EventEmittersComponent implements OnInit {

  lastShare = '';
  totalLikes = 0;
  catLikes = 1202;

  constructor() { }

  ngOnInit(): void {
  }

  onShare(data: { name: string, likes: number }) {
    this.lastShare = data.name;
    this.totalLikes = data.likes;
  }

  onLikeCat() {
    this.catLikes = this.catLikes + 1;
    this.onShare({ name: 'Cat Potter', likes: this.catLikes });
  }

}
