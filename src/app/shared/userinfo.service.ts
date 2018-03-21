import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
import { map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';


@Injectable()
export class UserinfoService {

  today: any =null;
  dd: any = null;
  mm: any = null;
  yyyy: any = null;


  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore)
              { }

  getusername(uid) {
    return this.afs.doc('users/' + uid).valueChanges()

      }



            setdate() {
              this.today = new Date();
               this.dd = this.today.getDate();
              this.mm = this.today.getMonth()+1; //January is 0!
             this.yyyy = this.today.getFullYear();

                       if(this.dd<10) {
                         this.dd = '0'+ this.dd
                       }

                       if(this.mm<10) {
                         this.mm = '0'+ this.mm
                       }

             this.today = this.mm + '/' + this.dd + '/' + this.yyyy;
            
            return this.today
                     }




}
