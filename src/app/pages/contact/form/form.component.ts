import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

import { environment } from '../../../../environments/environment.development';

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
  loading = false;

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

    this.loading = true;
    
    const emailjsPublicKey = environment.EMAILJS_PUBLIC_KEY;
    const emailjsServiceId = environment.EMAILJS_SERVICE_ID;
    const emailjsTemplateId = environment.EMAILJS_TEMPLATE_ID;

    if (!emailjsServiceId || !emailjsTemplateId) {
      console.error('EmailJS service ID or template ID is missing');
      return;
    }
    emailjs.send(
      emailjsServiceId,
      emailjsTemplateId, 
      this.form.value, 
      emailjsPublicKey
    )
    .then(() => {
      this.loading = false;
      this.form.reset();
      alert('Thank you for your message! We will get back to you soon.');
    })
    .catch((error) => {
      this.loading = false;
      console.error('EmailJS Error:', (error as EmailJSResponseStatus).text);
      alert('Oops! Something went wrong. Please try again later.');
    });
  }
}
