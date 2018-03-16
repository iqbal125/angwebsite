import { Component, OnInit } from '@angular/core';
import { AuthlogService } from '../shared/authlog.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor (private AuthlogService: AuthlogService) { }

  OnLogout () {
    this.AuthlogService.logout()
    console.log('It worked')
  }

  ngOnInit() {
  }

}
