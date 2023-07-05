import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost/api/login/';

  constructor(private http: HttpClient) { }

  iniciarSesion(rol: number, usr: string, password: string): Observable<string> {
    const loginData = {
      data1: rol.toString(),
      data2: usr,
      data3: password

    };

    return this.http.post<string>(this.apiUrl, loginData);
  
  }
}
