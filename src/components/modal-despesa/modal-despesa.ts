import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'modal-despesa',
  templateUrl: 'modal-despesa.html'
})
export class ModalDespesaComponent {

  item: any;

  constructor(public viewCtrl: ViewController, params: NavParams) {
    console.log('ModalDespesaComponent');
    let dados = params.get('data');
    this.item = {
      categoria_id : dados.categoria_id,
      item_id: dados.item_id,
      item_img : dados.item_img,
      item_nome: dados.item_nome,
      item_quantidade : 1,
      item_valor: 0.00
    };

    console.log(this.item);
  }
  onSubmit(){
    console.log(this.item);
  }
  closeModal(){
    this.viewCtrl.dismiss();
  }
}
