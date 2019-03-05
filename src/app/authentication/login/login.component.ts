import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
formGroup: FormGroup;

  constructor(private authService: AuthServiceService) { }

  ngOnInit() {
   this.formGroup = new FormGroup({
     uName: new FormControl(null, Validators.required),
     uPsw: new FormControl(null, Validators.required)
   });
  }

  onSubmit() {
this.authService.getToken(this.formGroup.get('uName').value, this.formGroup.get('uPsw').value)
.subscribe(
  (response: any) => {
localStorage.setItem('token', response.access_token);
this.formGroup.reset();
  }
);
  }

}
