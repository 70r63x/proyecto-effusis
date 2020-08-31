import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginModel } from 'src/app/models/login.models';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as ui from 'src/app/ui.actions';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginform: LoginModel;
  cargando: boolean = false;
  uiSubscriptions: Subscription;
  showError: boolean = false;


  constructor(private auth: AuthService, private router: Router, private store: Store<AppState>, private titleService: Title) {
    this.loginform = new LoginModel();
  }

  ngOnInit() {
    this.titleService.setTitle('Inicio sesión - Effusis - Todo lo que quieres ver');
    this.uiSubscriptions = this.store.select('ui').subscribe(ui => this.cargando = ui.isLoading);
  }

  ngOnDestroy(){
    this.uiSubscriptions.unsubscribe();
  }

  login(form: NgForm){
    if(!form.valid){
      this.showError = true;
      console.log("invalido");
    }else{
      this.showError = false;
      //activar loading
      this.store.dispatch( ui.isLoading());
      this.auth.login(this.loginform).subscribe( resp => {
        console.log(resp);
        this.store.dispatch(ui.stopLoading());
        this.router.navigateByUrl('/home');
        //cancelar loading
      }, (err) => {
        this.store.dispatch(ui.stopLoading());
        console.log(err.error.error.message);
        //mostrar error
      });
    }
  }

}
