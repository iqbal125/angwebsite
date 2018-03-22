import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',

})
export class AddproductComponent  {



  constructor(  private router: Router ) {

          }

          addproduct (form: NgForm) {
            firebase.firestore().collection('products').add({
              title: form.value.name,
              price: +form.value.price,
              quantity: +form.value.quantity,
              description: form.value.description,
              ImgURL: form.value.ImgURL
            }).then(() => {
              this.router.navigate(['/account']);
          });


          }


}
