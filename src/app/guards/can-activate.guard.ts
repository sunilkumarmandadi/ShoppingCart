import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {
  //   if (localStorage.getItem('token')) {
  //   return true; }    else {
  //   return false; }
  // }
canActivate() {
  if (localStorage.getItem('token')) {
return true;
  } else {
    return false;
  }
}
}
