import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';
  addrFrom: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.addrFrom = this.fb.group({
      name: 'Haider',
      home: this.fb.group({}),
      office: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
      }),
    });
  }
}
