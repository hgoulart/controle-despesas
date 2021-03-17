import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

/**
 * Generated class for the CadastroItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-item',
  templateUrl: 'cadastro-item.html',
})
export class CadastroItemPage {

  produto: any;
  classe: any;
  categorias: any;

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, private service: ServiceProvider) {
    this.produto = {
      nome: '',
      categoria_id: ''
    }
  }

  ionViewDidLoad() {
    console.log('RelatorioItemsPage');
    this.carregarCategorias();
  }
  carregarCategorias(){

    this.service.showLoading();
  
      let url = 'selecionar-categorias.php';
  
      this.service.post(url, 2 ).subscribe(
        data => {
  
          this.classe = data;
          this.categorias = this.classe.categorias;
  
          console.log(data);
          setTimeout( ()=>{
            this.service.hideLoading();
          }, 2000)
  
        },
        err => {
          this.service.hideLoading();
          // this.modalError(err.status+' - '+err.statusText);
    
          console.log(err);
        }
      );
  
    }
  onStateChange(event){
    console.log(event);
    this.produto.categoria_id = event;
    console.log(this.produto);
  }
  incluirProduto(){
    console.log(this.produto);
    if(this.produto.nome != '' && this.produto.categoria_id != ''){

      this.service.showLoading();

      console.log(this.produto);
    
      setTimeout(()=>{

        let url = 'salvar-produto.php';

        this.service.post(url, this.produto).subscribe(
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
    }else{
      alert("Campos obrigatórios");
    }
  }
  back(){
    this.navCtrl.push(HomePage);
  }
  exit(){
    this.navCtrl.push(LoginPage);
  }
}
