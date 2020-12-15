import { Component } from '@angular/core';
import { FormControl, FormGroup, NG_ASYNC_VALIDATORS, Validators } from '@angular/forms';
import { UsernameValidators } from '../../common/validators/username.validators'
@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
//when using UsernameValidators.shouldBeUnique in a list of arguments it returns an error
  form = new FormGroup ({
    username: new FormControl('',
      Validators.required, 
      //Validators.minLength(3),
      // UsernameValidators.cannotContainSpace,
      UsernameValidators.shouldBeUnique
      // UsernameValidators.shouldntBeYousef
    ),
    password: new FormControl('', Validators.required)
  });

  get username(){
    return this.form.get('username')
  }

  get password(){
    return this.form.get('password')
  }

  login(){
    this.form.setErrors({
      invalidLogin: true
    });
  }
}
