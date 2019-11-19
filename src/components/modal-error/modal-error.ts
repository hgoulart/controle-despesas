import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'modal-error',
  templateUrl: 'modal-error.html'
})
export class ModalErrorComponent {

  message: string;

  constructor( public viewCtrl: ViewController, params: NavParams ) {
    console.log('ModalErrorComponent ');
    this.message = params.get('data');
  }
  closeModal(){
    
    this.viewCtrl.dismiss();
  
  }

}
