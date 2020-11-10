import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/models/login';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginRequest = new LoginRequest("", "");
  titulo = "Login";

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { 

  }

  ngOnInit(): void {
  }

  login(){

    this.loginService.auth(this.loginRequest).subscribe((token) => {
      localStorage.setItem("accessToken", token.jwt);
      console.log(token)
      this.loginRequest.password = "";
      this.loginRequest.username = "";
      this.router.navigate(["/items"]);
    },(err) => {
      console.log(err)
    })
  }

}
