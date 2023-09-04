import { Component, OnInit, Input } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormGroupDirective,
} from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  @Input() home: FormGroup;
  home1: FormGroup;
  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit() {
    this.home1 = this.rootFormGroup.control;
    this.home.addControl('zip', new FormControl('', Validators.required));
    this.home.addControl('street', new FormControl('', Validators.required));
    this.home.addControl('city', new FormControl('', Validators.required));
    console.log('Home FormGroup is ', this.home1);
  }
}
