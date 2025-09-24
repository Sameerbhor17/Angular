import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-validators',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './reactive-forms-validators.html',
  styleUrl: './reactive-forms-validators.scss'
})
export class ReactiveFormsValidators {
  public loginForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)])
  });
  public show: boolean = false;

  submitFormData() {
    console.log(this.loginForm.value);
  }

  get name() {
    return this.loginForm.get('name')
  }

  get password() {
    return this.loginForm.get('password')
  }
}
