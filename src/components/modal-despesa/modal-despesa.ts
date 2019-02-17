import { Component } from '@angular/core';
import { ViewController, NavParams, NavController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { HomePage } from '../../pages/home/home';
import * as moment from 'moment';

@Component({
  selector: 'modal-despesa',
  templateUrl: 'modal-despesa.html'
})
export class ModalDespesaComponent {

  item: any;
  today: string;

  constructor(public navCtrl: NavController, private service: ServiceProvider, public viewCtrl: ViewController, params: NavParams) {
    console.log('ModalDespesaComponent');
    this.today = moment().format('YYYY-MM');
    console.log(this.today);
    console.log(this.today.substring(0, 7));
    let dados = params.get('data');
    this.item = {
      categoria_id : dados.categoria_id,
      item_id: dados.item_id,
      item_img : dados.item_img,
      item_nome: dados.item_nome,
      comments: '',
      item_valor: ''
    };

    console.log(this.item);
  }
  onSubmit(){
    console.log(this.item);
    // this.item.item_valor = this.item.item_valor.replace(/,/g, '').replace(/./g, '');
    
    let usuario = this.service.getUser();
    this.item.usuario_id = usuario.usuario_id;
    this.item.busca_data = this.today;
    console.log(this.item);
    this.service.showLoading();

    let url = 'salvar-movimentacao.php';

    this.service.post(url, this.item ).subscribe(
      data => {

        console.log(data);

        if(data != 'Erro'){

          setTimeout(()=>{
            this.service.showLoading();
            this.navCtrl.setRoot(HomePage);
            this.navCtrl.popToRoot();
          },1000);
        }
        else{
          setTimeout(()=>{
            this.service.showLoading();
            alert('Erro!'); 
          },1000);
           
        } 
      },
      err => {
        setTimeout(()=>{
          this.service.showLoading();
          alert('Erro!'); 
        },1000);
        console.log(err);
      }
    );
  }
  closeModal(){
    this.viewCtrl.dismiss();
  }
}
