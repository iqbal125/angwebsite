import { Component, OnInit } from '@angular/core';
import { AuthlogService } from '../shared/authlog.service';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',

})
export class HeaderComponent {

  authState: any = null;

  constructor (private AuthlogService: AuthlogService,
                private afAuth: AngularFireAuth) {}

  OnLogout () {
    this.AuthlogService.logout()
    console.log('It worked')
  }





}
