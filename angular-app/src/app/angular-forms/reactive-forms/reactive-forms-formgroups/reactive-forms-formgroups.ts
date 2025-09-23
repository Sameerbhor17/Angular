import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-formgroups',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './reactive-forms-formgroups.html',
  styleUrl: './reactive-forms-formgroups.scss'
})
export class ReactiveFormsFormgroups {
  public formData = new FormGroup({
    name: new FormControl(),
    password: new FormControl(),
    email: new FormControl(),
    mobile: new FormControl()
  });
  public show: boolean = false;

  submitFormData() {
    console.log(this.formData.value);
  }

  setData() {
    this.formData.setValue({
    name: 'Sameer',
    password: 'Sameer@1712',
    email: 'sameer@123.com',
    mobile: 9876543210
  });
  }

}
