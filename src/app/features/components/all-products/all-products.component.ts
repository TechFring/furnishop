import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  private readonly ALL_PRODUCTS: IProduct[] = [
    { name: 'Ceiling Light', image: 'assets/images/all-products/ceiling-light.png', offer: 75, price: 82 },
    { name: 'Wood Chair', image: 'assets/images/all-products/wood-chair.png', offer: 50, price: 70 },
    { name: 'Papper Cupboard', image: 'assets/images/all-products/papper-cupboard.png', offer: 105, price: 120 },
    { name: 'Ole Gundorse Spring...', image: 'assets/images/all-products/ole-gundorse-spring.png', offer: 82, price: 100 },
    { name: 'Treos Seroes 911', image: 'assets/images/all-products/treos-seroes-911.png', offer: 200, price: 210 },
    { name: 'Multi bilderman slibber...', image: 'assets/images/all-products/multi-bilderman-slibber.png', offer: 45, price: 50 },
    { name: 'XORA corner desk', image: 'assets/images/all-products/xora-corner-desk.png', offer: 320, price: 325 },
    { name: 'Black Forest Series wo...', image: 'assets/images/all-products/black-forest-series-wo.png', offer: 225, price: 240 },
    { name: 'Kendall Velvet Dinin...', image: 'assets/images/all-products/kendall-velvet-dining-chair.webp', offer: 50, price: 55 },
    { name: 'Nevada Triple Mirrore...', image: 'assets/images/all-products/nevada-triple-mirrored-wardrobe.webp', offer: 300, price: 309 },
    { name: 'Lucy Cane Grey Storag...', image: 'assets/images/all-products/lucy-cane-grey-storage-bench.webp', offer: 160, price: 169 },
    { name: 'Vixen Compact Square...', image: 'assets/images/all-products/vixen-compact-square-dining-table.webp', offer: 55, price: 60 },
    { name: 'Nirvana Rattan Bar S...', image: 'assets/images/all-products/nirvana-rattan-bar-stool.webp', offer: 78, price: 84 },
    { name: 'Toulouse Ivory Tripl...', image: 'assets/images/all-products/toulouse-ivory-triple-wardrobe.webp', offer: 450, price: 479 },
    { name: 'Fulton Storage Bench', image: 'assets/images/all-products/fulton-storage-bench.webp', offer: 110, price: 118 },
    { name: 'Kendall Bench Seat', image: 'assets/images/all-products/kendall-bench-seat.webp', offer: 180, price: 199 },
    { name: 'Vivian Bench Seat', image: 'assets/images/all-products/vivian-bench-seat.webp', offer: 190, price: 209 },
    { name: 'Montreal Distresse...', image: 'assets/images/all-products/montreal-distressed-dining-bench.webp', offer: 75, price: 79 },
  ];
  public readonly PER_PAGE = 8;
  public readonly TOTAL = this.ALL_PRODUCTS.length;
  public readonly NUMBER_OF_PAGES =  Math.ceil(this.TOTAL / this.PER_PAGE);
  public readonly PAGES_ARRAY = Array.from({ length: this.NUMBER_OF_PAGES }, (_, i) => i);

  public products: IProduct[] = [];
  private _paginator$ = new BehaviorSubject<number>(1);
  public currPage!: number;

  constructor() {}

  public ngOnInit(): void {
    this._paginator$.subscribe((page) => {
      if (!this.havePrevPage(page) || !this.haveNextPage(page)) {
        return;
      }

      this.currPage = page;
      this.products = this.ALL_PRODUCTS.slice(((this.currPage - 1) * this.PER_PAGE), (this.currPage * this.PER_PAGE));
    });
  }

  public paginatorEvent(page: number): void {
    this._paginator$.next(page);
  }

  public haveNextPage(page: number): boolean {
    return page <= this.NUMBER_OF_PAGES;
  }

  public havePrevPage(page: number): boolean {
    return page > 0;
  }
}
