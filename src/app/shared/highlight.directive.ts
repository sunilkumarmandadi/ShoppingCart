import { Directive, Renderer2, ElementRef, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input() defaultColor: string;
  @Input() mouseoverColor: string;
  @HostBinding('style.backgroundColor') backgroundColor: String = 'transparent';
  constructor() {

  }
ngOnInit() {

}

@HostListener('mouseover') mouseover() {
 this.backgroundColor = this.mouseoverColor;
}
@HostListener('mouseleave') mouseleave() {
  this.backgroundColor = this.defaultColor;
}
}
