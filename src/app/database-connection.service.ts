import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DatabaseConnectionService {
  private readonly dataUrl = '/api/data';
  private readonly addUserUrl = '/api/addUser';
  private readonly signInUrl = '/api/signIn';
  constructor(private http: HttpClient) {}

  getTableData() {
    return this.http.get<any>(this.dataUrl);
  }

  signIn(username: string, password: string) {
    const requestBody = {
      username,
      pass: password
    };
    return this.http.post(this.signInUrl, requestBody, httpOptions);
  }

  addUser(username: string, email: string, password: string) {
    const requestBody = {
      username,
      email,
      pass: password
    };
    return this.http.post(this.addUserUrl, requestBody, httpOptions);
  }
}
