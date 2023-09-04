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
  allform: FormGroup;
  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit() {
    this.allform = this.rootFormGroup.control;
  }
}
