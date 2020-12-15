import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators {
    static passCheck(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (control.value !== "123")
                    resolve({ passwordError: true });
                else
                    resolve (null);
            }, 2000 );
        });
    }

    static repeatedPasswordCorrect(control: AbstractControl) : ValidationErrors | null {
        let newPass = control.get('newPassword');
        let comfirmPass = control.get('confirmPassword');
        if (newPass != comfirmPass)
            return {inValidPassword: true};
        return null;
    }
}