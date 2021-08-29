import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public profileForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(1)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', [Validators.required, Validators.minLength(1)])
  }) 

  onSave() {
    if(!this.profileForm.valid) {
      console.log(this.profileForm.get('username')?.errors,  
      this.profileForm.get('email')?.errors, this.profileForm.get('age')?.errors);
    }
    else {
      console.log('Send JSON to server');
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
