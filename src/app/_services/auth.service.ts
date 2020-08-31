import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

import { JwtHelperService } from "@auth0/angular-jwt";

import { LoginModel } from "../_models/login";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  decodedToken: any;
  jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient) {}

  login(model: LoginModel) {
    return this.http.post(`${environment.apiUrl}auth/signin`, model).pipe(
      map((res: any) => {
        const user = res.response;
        if (res.status === 200) {
          if (user) {
            localStorage.setItem("throttle_token", user.Token);
            this.decodedToken = this.jwtHelper.decodeToken(user.Token);
          }
        }
      })
    );
  }

  loggedIn() {
    const token = localStorage.getItem("throttle_token");
    return !this.jwtHelper.isTokenExpired(token);
  }
}
