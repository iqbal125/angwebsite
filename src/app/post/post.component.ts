import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthlogService } from '../shared/authlog.service';
import { UserinfoService } from '../shared/userinfo.service';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',

})


export class PostComponent  {

  date: any = null;

    constructor(private router: Router,
                private AuthlogService: AuthlogService,
                private UserinfoService: UserinfoService) {

            }



            addpostuser(form: NgForm ) {
              const date = this.UserinfoService.setdate()
              firebase.firestore().collection('users').doc(this.AuthlogService.authState.uid).collection('posts').add({
                uid: this.AuthlogService.authState.uid,
                title: form.value.title,
                body: form.value.post,
                date: date
            })
          }

            createpost (form: NgForm) {

              const date = this.UserinfoService.setdate()
              firebase.firestore().collection('posts').add({
                uid: this.AuthlogService.authState.uid,
                title: form.value.title,
                body: form.value.post,
                date: date
              }).then(() => {
                this.router.navigate(['/showposts']);
            });

        }

}
