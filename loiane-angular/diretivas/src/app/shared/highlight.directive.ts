import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostBinding('style.backgroundColor') backgroundColor = 'white';

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = this.activeColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }

  @Input() defaultColor = 'white';
  @Input('highlight') activeColor = 'yellow';

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

}
