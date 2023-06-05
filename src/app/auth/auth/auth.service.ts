import { HttpClient } from '@angular/common/http';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";

import {  Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient){}

  public auth = getAuth();

  async signUp(email: string, password: string) {
    return await createUserWithEmailAndPassword(this.auth, email, password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    }).then((res) => console.log('Success'));
  }

}
