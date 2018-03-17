import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthlogService } from '../shared/authlog.service';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})


export class PostComponent  {


    constructor(private router: Router,
                private AuthlogService: AuthlogService) {

            }

            addpostuser(form: NgForm ) {
              firebase.firestore().collection('users').doc(this.AuthlogService.authState.uid).collection('posts').add({
                title: form.value.title,
                body: form.value.post
            })
          }

            createpost (form: NgForm) {
              firebase.firestore().collection('posts').add({
                uid: this.AuthlogService.authState.uid,
                title: form.value.title,
                body: form.value.post
              }).then(() => {
                this.router.navigate(['/']);
            });

        }

}
