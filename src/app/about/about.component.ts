import { Component, OnInit } from '@angular/core';
import { IDeposition } from './models/deposition.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public readonly DEPOSITIONS: IDeposition[] = [
    {
      name: 'Josh Smith',
      photo: 'assets/images/depositions/josh-smith.png',
      occupation: 'Manager of The New York Times',
      deposition: 'They are have a perfect touch for make something so professional, interest and useful for a lot of people.',
    },
    {
      name: 'Rekha Varad',
      photo: 'assets/images/depositions/rekha-varad.jpg',
      occupation: 'CEO at Google inc',
      deposition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  constructor() {}

  public ngOnInit(): void {}
}
