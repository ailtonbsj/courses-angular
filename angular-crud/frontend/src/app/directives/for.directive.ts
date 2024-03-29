import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForEm') numbers: number[]
  @Input('myForUsando') texto: string

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
    ) {
    this.numbers = []
    this.texto = ''
    console.log('myFor')
  }

  ngOnInit(): void {
    for(let number of this.numbers) {
      this.container.createEmbeddedView(
        this.template, { $implicit: number +' '+ this.texto }
      )
    }

    console.log(this.numbers)
    console.log(this.texto)
    
    
  }

}
