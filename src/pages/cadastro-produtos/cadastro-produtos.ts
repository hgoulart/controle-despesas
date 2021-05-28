import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { HomePage } from '../home/home';
import * as moment from 'moment';
import { LoginPage } from '../login/login';
import { addMonths, format } from 'date-fns';
import { ModalErrorComponent } from '../../components/modal-error/modal-error';
import { ModalSuccessComponent } from '../../components/modal-success/modal-success';

@IonicPage()
@Component({
  selector: 'page-cadastro-produtos',
  templateUrl: 'cadastro-produtos.html',
})
export class CadastroProdutosPage {

  dateOne = new Date();
  produto: any;
  classe: any;
  categorias: any;
  movimentacao: any = new Array();
  searchDate: string;
  date: string;

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, private service: ServiceProvider) {
    this.searchDate = moment(new Date()).format();
    console.log("🚀 ~ file: relatorios.ts ~ line 44 ~ RelatoriosPage ~ constructor ~ this.searchDate", this.searchDate)
    this.produto = {
      comments: '',
      categoria_id: '',
      parcelas: null,
      valor: null
    }
  }

  ionViewDidLoad() {
    console.log('RelatorioItemsPage');
    this.carregarCategorias();
  }
  carregarCategorias() {

    this.service.showLoading();

    let url = 'selecionar-categorias.php';

    this.service.post(url, 2).subscribe(
      data => {

        this.classe = data;
        this.categorias = this.classe.categorias;

        console.log(data);
        setTimeout(() => {
          this.service.hideLoading();
        }, 2000)

      },
      err => {
        this.service.hideLoading();
        console.log(err);
      }
    );

  }
  onStateChange(event) {
    console.log(event);
    this.produto.categoria_id = event;
    console.log(this.produto);
  }
  incluirProduto() {

    let usuario = this.service.getUser();
    console.log(this.produto);
    if (this.produto.comments != '' && this.produto.categoria_id != '') {

      let despesas = [];

      for (let i = 1; i <= this.produto.parcelas; i++) {
        let add = addMonths(this.dateOne, i);
        console.log(add);
        let busca_data = format(add, "yyyy-MM");
        let dateFormat = format(add, "yyyy-MM-dd");

        let despesaFixa = {
          classe_id: 2,
          categoria_id: this.produto.categoria_id,
          usuario_id: usuario.usuario_id,
          busca_data: busca_data,
          categoria_valor: this.produto.valor,
          comments: this.produto.comments,
          data: dateFormat
        };

        despesas.push(despesaFixa);
      }

      console.log(despesas);
      this.service.showLoading();

      setTimeout(() => {

        let url = 'salvar-despesa-fixa.php';

        this.service.post(url, despesas).subscribe(
          data => {
            console.log(data);
            this.service.hideLoading();
            this.navCtrl.push(HomePage);
          },
          err => {

            this.service.hideLoading();
            // this.modalError(err.status+' - '+err.statusText);
            alert("Erro");
            console.log(err);
          }
        );
      }, 2000);
    } else {
      alert("Campos obrigatórios");
    }
  }
  back() {
    this.navCtrl.push(HomePage);
  }
  exit() {
    this.navCtrl.push(LoginPage);
  }

  carregarMovimentacao() {
    this.service.showLoading();

    this.date = this.searchDate.substring(0, 7);

    console.log(this.date);

    let usuario = this.service.getUser();
    console.log(usuario);

    let url = 'selecionar-despesa-fixa.php';

    this.service.post(url, { id: usuario.usuario_id, data: this.date }).subscribe(
      data => {

        this.movimentacao = data;

        console.log(this.movimentacao);
        this.service.hideLoading();
      },
      err => {
        this.service.hideLoading();
        console.log(err);
      }
    );

  }

  open(item) {
    item.isopen = !item.isopen;
  }

  atualizarDespesa(despesa) {

    console.log("🚀 ~ file: cadastro-produtos.ts ~ line 159 ~ CadastroProdutosPage ~ salvarDespesa ~ despesa", despesa)
    this.service.showLoading();

    setTimeout(() => {

      let url = 'atualizar-despesa-fixa.php';

      this.service.post(url, despesa).subscribe(
        data => {

          despesa.isopen = false;
          console.log(data);
          this.service.hideLoading();
        },
        err => {

          this.service.hideLoading();
          // this.modalError(err.status+' - '+err.statusText);
          alert("Erro");
          console.log(err);
        }
      );
    }, 2000);

  }

  deletarDespesa(despesa) {
    console.log("🚀 ~ file: cadastro-produtos.ts ~ line 159 ~ CadastroProdutosPage ~ salvarDespesa ~ despesa", despesa)

    this.service.showLoading();

    let url = 'deletar-categoria.php';

    this.service.post(url, despesa).subscribe(
      data => {

        console.log(data);
        this.date = this.searchDate.substring(0, 7);

        console.log(this.date);

        let usuario = this.service.getUser();
        console.log(usuario);

        let url = 'selecionar-despesa-fixa.php';

        this.service.post(url, { id: usuario.usuario_id, data: this.date }).subscribe(
          response => {

            this.movimentacao = response;

            console.log(this.movimentacao);
            this.service.hideLoading();
          },
          err => {
            this.service.hideLoading();
            this.modalError("Ocorreu um erro.");
            console.log(err);
          }
        );
      },
      err => {
        this.service.hideLoading();
        // this.modalError(err.status+' - '+err.statusText);
        this.modalError("Ocorreu um erro.");
        console.log(err);
      }
    );
  }
  onChangeCategoria(event, item) {
    console.log(event);
    item.categoria_id = event;
    console.log(item);
  }

  changeCategoria(item) {
    item.opencategoria = !item.opencategoria;
  }
  modalError(message) {
    let modalError = this.modalCtrl.create(ModalErrorComponent, {data: message});
    modalError.present();
  }
  modalSuccess(message) {
    let modalSuccess = this.modalCtrl.create(ModalSuccessComponent, {data: message});
    modalSuccess.present();
  }
}
