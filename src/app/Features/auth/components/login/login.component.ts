import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService:AuthService,
    private alert: ToastrService,
    private router: Router
    ) { }

  ngOnInit() {
    var data = localStorage.getItem("kds-Credential")
    if(data){
      this.router.navigate(["kitchen-display"])
    }
    this.createForm();
  }
  createForm() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(){
    
    var userName = this.loginForm.value.userName;
    var pass = this.loginForm.value.password;
    this.authService.login(userName,pass).subscribe(
      (data)=>{
        console.log(data);
        
        if(data){
          this.alert.success('Login successful');
          localStorage.setItem("kds-Credential",JSON.stringify(data))
          this.router.navigate(['kitchen-display']);
        }
        else{
          this.alert.error('Login Failed');
        }
        
      },
      (err)=>{
        console.log(err);
        
      }
    )

    
  }

}
