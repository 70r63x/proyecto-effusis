import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UsuarioModel } from '../models/usuario.models';
import { LoginModel } from '../models/login.models';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import * as authActions from '../auth/auth.actions';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userToken: string;

  constructor(private http: HttpClient, private store: Store<AppState>) {
    this.readToken();
  }

  logout(){
    localStorage.removeItem('token');
  }

  login(usuario: LoginModel){
    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(`${environment.server}signInWithPassword?key=${environment.apiKey}`, authData
    ).pipe(map( resp => {
      const tempUser = new LoginModel();
      tempUser.email = resp['email'];
      tempUser.password = resp['idToken'];
      this.store.dispatch(authActions.setUser({user: tempUser}));
      this.saveToken(resp['idToken']);
      return resp;
    }));
  }

  registrar(usuario: UsuarioModel){
    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(`${environment.server}signUp?key=${environment.apiKey}`, authData
    ).pipe(map( resp => {
      this.saveToken(resp['idToken']);
      return resp;
    }));
  }

  private saveToken(idToken:  string){
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    let date = new Date();
    date.setSeconds(3600);

    localStorage.setItem('tokenExpire', date.getTime().toString())
  }

  readToken(){
    if(localStorage.getItem('token')){
      this.userToken = localStorage.getItem('token');
    }else{
      this.userToken = '';
    }
  }

  isAuthenticated(): boolean{
    if( this.userToken.length < 2){
      return false;
    }

    const expire = Number(localStorage.getItem('tokenExpire'));
    const date = new Date();
    date.setTime(expire);

    if (date > new Date()) {
      return true;
    }else{
      return false;
    }
      
  }
}
