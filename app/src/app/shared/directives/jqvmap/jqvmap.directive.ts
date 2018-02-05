import { Directive, Input, ElementRef, OnInit } from '@angular/core';

declare var jQuery: any;

@Directive({
  selector: '[JqvMap]'
})

export class JqvMapDirective implements OnInit {
  @Input() private options: any;
  @Input() private height: any;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    const initJqvMap = jQuery(this.el.nativeElement);

    initJqvMap.css({
      height: this.height,
      width: '100%'
    });

    initJqvMap.vectorMap(
      this.options
    );
  }
}
