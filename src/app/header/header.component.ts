import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { fadeIn } from '../shared/animations/fade-in.animation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [fadeIn],
})
export class HeaderComponent implements OnInit {
  public readonly BP_MOBILE = 475;
  public mobile = false;
  public applyMin = false;
  public openMenu = false;
  public fragment!: string | null;

  constructor(private _route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.onResize();

    this._route.fragment.subscribe((fragment) => {
      this.fragment = fragment;
      this.toggleOpenMenu();
    });
  }

  public toggleOpenMenu(): void {
    if (!this.mobile) {
      return;
    }

    this.openMenu = !this.openMenu;

    if (this.openMenu) {
      document.body.classList.add('modal-open');
      document.body.setAttribute('style', 'overflow: hidden;');
    } else {
      document.body.classList.remove('modal-open');
      document.body.removeAttribute('style');
    }
  }

  @HostListener('window:resize')
  public onResize(): void {
    this.mobile = window.innerWidth <= this.BP_MOBILE;
  }

  @HostListener('window:scroll', ['$event'])
  public onScroll(event: Event): void {
    const scrollPosition = (<any>event.target)['scrollingElement'].scrollTop;
    this.applyMin = scrollPosition >= 120;
  }
}
