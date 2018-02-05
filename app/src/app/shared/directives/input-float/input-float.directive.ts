import { Directive, ElementRef, Renderer, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[formControlFloat]'
})

export class InputFloatDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer) { }
  elem: any = this.el.nativeElement;

  @HostListener('blur') onBlur() {
    const status = true ? this.elem.value : false;
    this.renderer.setElementClass(this.elem, 'form-control--active', status);
  }

  ngOnInit() {
    if (this.elem.value) {
      this.renderer.setElementClass(this.elem, 'form-control--active', true);
    }
  }
}
