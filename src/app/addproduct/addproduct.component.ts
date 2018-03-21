import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',

})
export class AddproductComponent  {



  constructor( ) {

          }

          addproduct (form: NgForm) {
            firebase.firestore().collection('products').add({
              name: form.value.name,
              price: +form.value.price,
              quantity: +form.value.quantity,
              ImgURL: form.value.ImgURL
            });

          }


}
