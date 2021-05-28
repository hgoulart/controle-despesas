import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

@Component({
  selector: 'modal-alert',
  templateUrl: 'modal-alert.html'
})
export class ModalAlertComponent {

  dados: any = {
    item_img: "",
    item_nome: "",
    m_classe_id: "",
    m_item_id: "",
    movimentacao_id: "",
    observacoes: "",
    preco: "",
    preco_data: "",
    preco_id: "",
  }

  constructor(private service: ServiceProvider, public viewCtrl: ViewController, params: NavParams) {
    console.log('Hello ModalAlertComponent Component');
    this.dados = params.get('data');
    console.log(this.dados);

  }
  closeModal() {
    this.viewCtrl.dismiss();
  }
  public removeItem() {

    this.service.showLoading();

    let url = 'deletar-item.php';

    this.service.post(url, this.dados).subscribe(
      data => {

        console.log(data);

        if (data != 'Erro') {
          alert(data);
          this.service.hideLoading();
        }
        else {
          // this.service.hideLoading();
          alert('Erro ao tentar excluir o item.');
          setTimeout(() => {
            this.service.hideLoading();
          }, 1000);
        }
      },
      err => {
        // this.service.hideLoading();
        // this.modalError(err.status+' - '+err.statusText);

        console.log(err);
      }
    );
  }
}
