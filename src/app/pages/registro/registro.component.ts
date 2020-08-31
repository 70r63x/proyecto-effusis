import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.models';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as ui from 'src/app/ui.actions';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit, OnDestroy {

    usuario: UsuarioModel;
    cargando: boolean = false;
    uiSubscriptions: Subscription

  constructor(private auth: AuthService, private router: Router, private store: Store<AppState>, private titleService: Title) {
    this.usuario = new UsuarioModel();
  }

  ngOnInit() {
    this.titleService.setTitle('Effusis - Todo lo que quieres ver');
    this.uiSubscriptions = this.store.select('ui').subscribe(ui => this.cargando = ui.isLoading);
  }

  ngOnDestroy(){
    this.uiSubscriptions.unsubscribe();
  }

  onSubmit( form: NgForm){
    if(!form.valid){
      console.log("invalido");
    }else{
      this.store.dispatch( ui.isLoading());
      this.auth.registrar(this.usuario).subscribe( resp => {
        console.log(resp);
        this.store.dispatch(ui.stopLoading());
        this.router.navigateByUrl('/home');
      }, (err) => {
        this.store.dispatch(ui.stopLoading());
        console.log(err.error.error.message);
      });
    }
    
  }


}
