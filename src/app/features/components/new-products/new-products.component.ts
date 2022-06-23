import { Component, OnInit } from '@angular/core';

import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.scss'],
})
export class NewProductsComponent implements OnInit {
  public readonly NEW_PRODUCTS: IProduct[] = [
    { name: 'Table', image: 'assets/images/new-products/table.png' },
    { name: 'Bed', image: 'assets/images/new-products/bed.png' },
    { name: 'Cupboard', image: 'assets/images/new-products/cupboard.png' },
    { name: 'Lighting', image: 'assets/images/new-products/lighting.png' },
    { name: 'Couch', image: 'assets/images/new-products/couch.webp' },
    { name: 'Curtain', image: 'assets/images/new-products/curtain.webp' },
  ]

  constructor() {}

  public ngOnInit(): void {}
}
