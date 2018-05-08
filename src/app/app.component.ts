import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Angular Reactive Form';
  rForm: FormGroup;
  post:any;                     // A property for our submitted form
  description:string = '';
  firstName:string = '';
  lastName:string = '';
  titleAlert:string = 'This Field is Required.';

  constructor(private fb: FormBuilder) { 

    this.rForm = fb.group({
      'firstName' : [null, Validators.required],
      'lastName' : [null, Validators.required],
      'description' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
      'validate' : ''
    });

  }

  ngOnInit() {
    this.rForm.get('validate').valueChanges.subscribe(
      (validate) => {
        if(validate == '1') {
          this.rForm.get('firstName').setValidators([Validators.required,Validators.minLength(3)]);
          this.titleAlert = "You need to specify at least 3 characters.";
          this.rForm.get('lastName').setValidators([Validators.required,Validators.minLength(3)]);
          this.titleAlert = "You need to specify at least 3 characters.";
        } else {
          this.rForm.get('firstName').setValidators(Validators.required);
          this.rForm.get('lastName').setValidators(Validators.required);
        }
        this.rForm.get('firstName').updateValueAndValidity();
        this.rForm.get('lastName').updateValueAndValidity();
      }
    )
  }

  addPost(post) {
    this.description = post.description;
    this.firstName = post.firstName;
    this.lastName = post.lastName;
  }

}
