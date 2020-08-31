import { createAction, props } from '@ngrx/store';
import { UsuarioModel } from '../models/usuario.models';
import { LoginModel } from '../models/login.models';

export const setUser = createAction(
    '[auth] setUser',
    props<{ user: LoginModel }>()
);

export const unSetUser = createAction('[auth] unSetUser');