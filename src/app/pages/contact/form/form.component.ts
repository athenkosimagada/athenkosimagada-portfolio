import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form!:FormGroup;

  constructor(
    private fb : FormBuilder,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    const emailjsPublicKey = environment.EMAILJS_PUBLIC_KEY;
    if (emailjsPublicKey) {
      emailjs.init(emailjsPublicKey);
    } else {
      console.error('EmailJS public key is missing');
    }
    
    this.form =  this.fb.group({
      fullName:new FormControl(null,  [
        Validators.required
      ]),
      email:new FormControl(null,  [
        Validators.required,
        Validators.email
      ]),
      message:new FormControl(null,  [
        Validators.required
      ])
    });
  }

  onFormSubmit(){
    if(this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }


    emailjs.send(
      environment.EMAILJS_SERVICE_ID,
      environment.EMAILJS_TEMPLATE_ID, 
      this.form.value, 
      environment.EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      this.toastr.success('Your message has been sent successfully');
    })
    .catch((error) => {
      console.error('EmailJS Error:', (error as EmailJSResponseStatus).text);
      this.toastr.error('Something went wrong, please try again');
    });
  }
}
