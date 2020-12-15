import {  Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PasswordValidators } from '../../common/validators/password.validators';

@Component({
  selector: 'password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent  {
  form ;
  // form = new FormGroup({
  //   oldPassword: new FormControl('', Validators.required, PasswordValidators.passCheck,),
  //   newPassword: new FormControl('', Validators.required),
  //   confirmPassword: new FormControl('', [Validators.required, PasswordValidators.repeatedPasswordCorrect]),
  // })

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: ['', Validators.required, PasswordValidators.passCheck],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]

    }, {validators: [PasswordValidators.repeatedPasswordCorrect]})
   }

  // ngOnInit() {
  // }

  get oldPassword(){
    return this.form.get('oldPassword')
  }
  get newPassword(){
    return this.form.get('newPassword')
  }

  get confirmPassword(){
    return this.form.get('confirmPassword')
  }

}
