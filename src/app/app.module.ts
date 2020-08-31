import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import { HttpClientModule } from '@angular/common/http';
import { UserIdleModule } from 'angular-user-idle';
import { environment } from '../environments/environment';

import { StoreModule } from '@ngrx/store';
import { appReducers } from './app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegistroComponent } from './pages/registro/registro.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header/header.component';
import { VideoIframeComponent } from './sections/video/video.component';
import { VideosComponent } from './sections/videos/videos.component';
import { FooterComponent } from './footer/footer/footer.component';

import { SafeInsertionPipe } from './pipe/safe-insertion.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent,
    HeaderComponent,
    VideoIframeComponent,
    VideosComponent,
    SafeInsertionPipe,
    FooterComponent
  ],
  entryComponents: [VideoIframeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    UserIdleModule.forRoot({idle: 10, timeout: 1}),
    StoreModule.forRoot( appReducers ),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    BrowserAnimationsModule,
    MatDialogModule
  ],
  exports: [
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
