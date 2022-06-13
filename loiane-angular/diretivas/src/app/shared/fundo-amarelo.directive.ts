import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]',
})
export class FundoAmareloDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    // Dont use this! XSS!
    // elementRef.nativeElement.style.backgroundColor = 'yellow';
    renderer.setStyle(elementRef.nativeElement, 'background-color', 'yellow');
    renderer.setStyle(elementRef.nativeElement, 'width', '300px');
  }
}
