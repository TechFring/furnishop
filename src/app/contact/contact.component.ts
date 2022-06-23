import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  public emailControl = new FormControl('', [Validators.required, Validators.email]);

  constructor() {}

  public ngOnInit(): void {}

  public onSubmit(): void {
    this.emailControl.markAsTouched();

    if (this.emailControl.valid) {
      this.emailControl.reset();
    }
  }
}
