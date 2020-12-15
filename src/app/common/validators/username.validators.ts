import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Resolve } from '@angular/router';

// if we dont want to create a new isnatnce when we use this class we can add static and use it from outside as 
// UsernameValidators.cannotContainSpace

export class UsernameValidators {
    static cannotContainSpace(control : AbstractControl) : ValidationErrors | null {
        if ((control.value as string).indexOf(' ') != -1)
            return { cannotContainSpace: true };
        return null;        
    }
    
    static shouldBeUnique(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === "yousef")
                    resolve({ shouldBeUnique: true });
                else
                    resolve (null);
            }, 2000 );
        });
    }
}
    // static shouldntBeYousef(control : AbstractControl) : ValidationErrors | null {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             if (control.value != "yousef")
    //                 resolve({ shouldntBeYousef: true });
    //             else 
    //                 resolve (null);
    //         }, 2000 );
    //     });
    // }
//}



