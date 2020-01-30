import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor() { }

  canActivate() {
    if (false) {
      return true;
    } else {
      console.log('navigate to the login page');
    }
  }
}
