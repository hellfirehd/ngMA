/// <reference types="dropzone/"/>
import { Directive, Input, ElementRef , OnInit } from '@angular/core';
declare var jQuery: any;

@Directive({
  selector: '[dropzone]'
})

export class DropzoneDirective implements OnInit {
  @Input() private posturl: any;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    const initDropzone = jQuery(this.el.nativeElement);

    initDropzone.dropzone({
      url: this.posturl,
      addRemoveLinks: true
    });
  }
}
