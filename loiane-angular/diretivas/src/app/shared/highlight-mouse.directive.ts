import {
  Directive,
  HostBinding,
  HostListener,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[highlightMouse]',
})
export class HighlightMouseDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'white';

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = 'yellow';
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = 'white';
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
}
