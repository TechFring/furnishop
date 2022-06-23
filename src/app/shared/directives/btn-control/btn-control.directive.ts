import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBtnControl]',
})
export class BtnControlDirective {
  @Input() public appBtnControl!: HTMLUListElement;
  @Input() public prev = false;
  @Input() public width!: number;

  constructor() {}

  public updateWidth(): void {
    if (!this.width) {
      this.width = this.appBtnControl.children[0].clientWidth;
    }
  }

  @HostListener('click')
  public onClick(): void {
    this.updateWidth();

    const currPosition = this.appBtnControl.scrollLeft;
    let newPosition;

    if (this.prev) {
      newPosition = currPosition - this.width;
    } else {
      newPosition = currPosition + this.width;
    }

    this.appBtnControl.scroll({ left: newPosition, behavior: 'smooth' });
  }

  @HostListener('window:resize')
  public onResize(): void {
    this.appBtnControl.scroll({ left: 0 });
  }
}
