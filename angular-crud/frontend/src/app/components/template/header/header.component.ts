import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headService: HeaderService) { }

  ngOnInit(): void {
  }

  get title(): string {
    return this.headService.headerData.title
  }

  get icon(): string {
    return this.headService.headerData.icon
  }

  get routeUrl(): string {
    return this.headService.headerData.routeUrl
  }

}
