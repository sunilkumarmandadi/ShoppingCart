import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient, HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(private http: HttpClient) {}
  getToken(uname: string, psw: string) {
const headers = new HttpHeaders();
const params = new HttpParams();

    // headers.set('Content-Type', 'application/json');
    // headers.set('Access-Control-Allow-Origin', '*');
    // headers.set('Access-Control-Allow-Methods', 'HEAD, GET, POST, PUT, PATCH, DELETE');
    // headers.set('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');

    params.set('UserName', uname);
    params.set('Password', psw);
    params.set('grant_type', 'password');
   // const userData = `UserName=${uname}&Password=${psw}&grant_type=password`;

   return this.http.post<any>('http://localhost:63966' + '/token', params);
  }

  onRegistration(uname: string, psw: string) {
    const empId = 1;
    const loginName = uname;
    const email = null;
    const ContactNo = null;
    const Address = null;
    const headers = new HttpHeaders;
  headers.set('Content-Type', 'application/json');
  headers.set('Access-Control-Allow-Origin', '*');
  headers.set('Access-Control-Allow-Methods', 'HEAD, GET, POST, PUT, PATCH, DELETE');
  headers.set('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');

return this.http.post(
  'http://localhost:63966/Api/Login/createcontact', {UserId: empId, UserName: uname,
  LoginName: loginName, Password: psw, Email: email, ContactNo: ContactNo, Address: Address}, { headers : headers});
  }
}
