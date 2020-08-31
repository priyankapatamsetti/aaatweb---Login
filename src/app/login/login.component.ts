import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../_services/auth.service";
import { LoginModel } from "../_models/login";
import { AlertifyService } from "../_services/alertify.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  @ViewChild("form") form: NgForm;

  constructor(
    private authSrvc: AuthService,
    private router: Router,
    private alertify: AlertifyService
  ) {}

  ngOnInit(): void {}

  loggedIn() {
    return this.authSrvc.loggedIn();
  }

  login() {
    if (this.form.invalid) return false;

    let loginModel = new LoginModel(this.username, this.password);

    this.authSrvc.login(loginModel).subscribe(
      (res) => {
        this.alertify.success("Logged in succesfully");
      },
      (err) => this.alertify.error(err.statusText),
      () => {
        this.router.navigateByUrl("dashboard");
      }
    );
  }
}
