import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }
  logInConsole(status: string) {
    console.log(status);
  }
}
