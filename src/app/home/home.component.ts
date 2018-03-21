import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthlogService } from '../shared/authlog.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

})
export class HomeComponent {



  constructor(private AuthlogService: AuthlogService) { }


    hit( ) {
      console.log(this.AuthlogService.authState.uid)
      
          }


}
