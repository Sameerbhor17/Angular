import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.scss'
})
export class ReactiveForms {
  public username = new FormControl();
  public password = new FormControl();
  public email = new FormControl();
  public mobile = new FormControl();
  public formData: any = [];

  sendInfo() {
    this.formData.push(this.username.value);
    this.formData.push(this.password.value);
    this.formData.push(this.email.value);
    this.formData.push(this.mobile.value);
  }

  setInfo() {
    this.username.setValue('Admin');
    this.password.setValue('Admin@123');
    this.email.setValue('admin.1234@testgmail.com');
    this.mobile.setValue(907654321);
  }

  clearInfo() {
    this.username.setValue('');
    this.password.setValue('');
    this.email.setValue('');
    this.mobile.setValue('');

    this.formData = [];
  }
}
