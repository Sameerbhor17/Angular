import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  imports: [FormsModule, NgIf],
  templateUrl: './template-driven-forms.html',
  styleUrl: './template-driven-forms.scss'
})
export class TemplateDrivenForms {
  public formData: any = null;
  public sendData: boolean = false;
  
  submitInfo(val: NgForm) {
    console.log(val);
    this.formData = val;
  }
}
