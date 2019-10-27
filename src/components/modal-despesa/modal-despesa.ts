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

  categoria: any;
  today: string;

  constructor(public navCtrl: NavController, private service: ServiceProvider, public viewCtrl: ViewController, params: NavParams) {
    console.log('ModalDespesaComponent');
    this.today = moment().format('YYYY-MM');
    console.log(this.today);
    console.log(this.today.substring(0, 7));
    let dados = params.get('data');
    this.categoria = {
      classe_id : dados.classe_id,
      categoria_id: dados.categoria_id,
      categoria_img : dados.categoria_img,
      categoria_nome: dados.categoria_nome,
      comments: '',
      categoria_valor: ''
    };

    console.log(this.categoria);
  }
  onSubmit(){
    this.service.showLoading();
    console.log(this.categoria);
    // this.item.item_valor = this.item.item_valor.replace(/,/g, '').replace(/./g, '');
    
    let usuario = this.service.getUser();
    this.categoria.usuario_id = usuario.usuario_id;
    this.categoria.busca_data = this.today;
    console.log(this.categoria);
    

    let url = 'salvar-movimentacao.php';

    this.service.post(url, this.categoria ).subscribe(
      data => {

        console.log(data);

        if(data != 'Erro'){

          setTimeout(()=>{
            this.service.hideLoading();
            this.navCtrl.setRoot(HomePage);
            this.navCtrl.popToRoot();
          },2000);
        }
        else{
          setTimeout(()=>{
            this.service.hideLoading();
            alert('Erro!'); 
          },2000);
           
        } 
      },
      err => {
        setTimeout(()=>{
          this.service.hideLoading();
          alert('Erro!'); 
        },2000);
        console.log(err);
      }
    );
  }
  closeModal(){
    this.viewCtrl.dismiss();
  }
}
