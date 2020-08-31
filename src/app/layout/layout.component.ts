import { Component, OnInit } from '@angular/core';
import { UserIdleService } from 'angular-user-idle';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  public idle = 600;

  constructor(private userIdle: UserIdleService, private auth: AuthService, private router: Router) {
    this.userIdle.setConfigValues({
      idle: this.idle
    });
  }

  ngOnInit() {
    this.userIdle.startWatching();

    this.userIdle.onTimerStart().subscribe(resp => {
      if(resp){
        console.log("expireInactividad");
        this.auth.logout();
        this.router.navigateByUrl('/login');
      }
    });
  }

}
