import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'modal-success',
  templateUrl: 'modal-success.html'
})
export class ModalSuccessComponent {

  message: string;
  
  constructor(public viewCtrl: ViewController, params: NavParams) {
    console.log(' ModalSuccessComponent');
    this.message = params.get('data');
  }
  closeModal(){
    this.viewCtrl.dismiss();
  }

}
