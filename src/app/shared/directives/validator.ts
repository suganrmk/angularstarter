import { FormControl, Validators } from '@angular/forms';


const whitespaceRegex = /^\s+$/;

// create your class that extends the angular validator class
export class CustomValidators extends Validators {
   
  static nowhitespace(control: FormControl) {
     console.log(control.value);
    if (control.value && control.value.length > 0) { 
      const matches = control.value.match(whitespaceRegex); 
      return matches && matches.length ? { invalid_characters: matches } : null;
    } else {
      return null;
    }
  }
}