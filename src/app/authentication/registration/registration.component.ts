import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private authService: AuthServiceService) { }
@ViewChild('form') form: NgForm;

user: any = {
  };
response: string;
  ngOnInit() {
  }

  OnRegistration() {
    console.log(`User Name: ${this.user.email}; Password: ${this.user.password}`);

  this.authService.onRegistration(this.user.email, this.form.value.password).subscribe(
    (response: any) => {
      this.response = response._body;
      console.log(`Registration Success`);
    this.form.reset(); }
  );
}
onReset() {
  this.form.reset();
}
}
