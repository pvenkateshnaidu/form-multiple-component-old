import { Component, OnInit, Input } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormGroupDirective,
} from '@angular/forms';

@Component({
  selector: 'app-office-addr',
  templateUrl: './office-addr.component.html',
  styleUrls: ['./office-addr.component.css'],
})
export class OfficeAddrComponent implements OnInit {
  @Input('office') office: FormGroup;
  parentformAcessOfficeChild: FormGroup;
  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit() {
    this.parentformAcessOfficeChild = this.rootFormGroup.control;
    this.office.addControl('street', new FormControl('', Validators.required));
    this.office.addControl('city', new FormControl('', Validators.required));
  }
}
