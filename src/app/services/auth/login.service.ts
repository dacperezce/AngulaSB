import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest, Token } from 'src/app/models/login';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  public auth(user: LoginRequest): Observable<Token> {
    return this.http.post<Token>(environment.LOGIN, user);
  }
}
