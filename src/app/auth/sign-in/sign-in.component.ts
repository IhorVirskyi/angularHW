import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public signInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  }) 


  constructor(private authService: AuthService) {


  }

  onSubmit() {
    if(!this.signInForm.valid) {
      console.log(this.signInForm.get('email')?.errors,  this.signInForm.get('password')?.errors);
    }
    else {
      const email = this.signInForm.get('email')?.value as string;
      const password = this.signInForm.get('password')?.value;
      this.authService.signIn(email, password);
    }
  }

  ngOnInit(): void {
  }

}
