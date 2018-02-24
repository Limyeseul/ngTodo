import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input()
  highlightColor: string;       // 외부에 입력 받아서 들어오는 변수

  // ElementRef 주입
  constructor(private el: ElementRef) {
    // this.el.nativeElement :: html 앨리먼트다.
    this.el.nativeElement.style.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = null;
  }

}
