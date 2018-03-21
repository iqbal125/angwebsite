import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthlogService } from '../shared/authlog.service';






@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',

})


export class AccountPageComponent  {

  uid: any = null;

          constructor(private AuthlogService: AuthlogService) {
            this.uid = this.AuthlogService.authState.uid
        }

      }
