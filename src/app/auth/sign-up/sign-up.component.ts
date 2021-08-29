import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth-service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public signUpForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  }) 

  constructor(private authService: AuthService) {


  }
  onSubmit() {
    if(!this.signUpForm.valid) {
      console.log(this.signUpForm.get('email')?.errors,  this.signUpForm.get('password')?.errors);
    }
    else {
      const email = this.signUpForm.get('email')?.value as string;
      const password = this.signUpForm.get('password')?.value;
      this.authService.signUp(email, password).then(x => {
        console.log(x);
      });
    }
  }

  ngOnInit(): void {
  }

}
