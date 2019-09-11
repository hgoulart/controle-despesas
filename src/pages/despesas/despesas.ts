import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ServiceProvider } from '../../providers/service/service';
import { ModalDespesaComponent } from '../../components/modal-despesa/modal-despesa';
import { FormGroup, FormControl } from '@angular/forms';
import { RelatoriosPage } from '../relatorios/relatorios';

@IonicPage()
@Component({
  selector: 'page-despesas',
  templateUrl: 'despesas.html',
})
export class DespesasPage {

  expense: any = {
    nome: '',
    preco: '',
    data: ''
  };
  searchQuery: string = '';
  classes: any;
  produtos: any;
  hasSearch: boolean = false;
  categiaSelecionada: any;
  classeForm;
  classesName;
  classe: any;
  categorias: any;

  constructor(public viewCtrl: ViewController, params: NavParams, public modalCtrl: ModalController, public navCtrl: NavController, private formBuilder: FormBuilder, private service: ServiceProvider) {

    this.classeForm = new FormGroup({
      "classesName": new FormControl({value: '', disabled: false})
    });

    this.classe = params.get('data');
    console.log(this.classe);
        // this.initializeItems();
    this.carregarCategorias(this.classe);

    this.expense = this.formBuilder.group({
      nome: ['', Validators.required],
      preco: ['', Validators.required],
      data: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DespesasPage');
  }
  despesaForm(){
    console.log(this.expense.value);
  }
  initializeCategorias() {

  }
  getCategorias(ev: any) {
    // Reset items back to all of the items
    this.initializeCategorias();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.hasSearch = true;
      this.categorias = this.categorias.filter((categoria) => {
        return (categoria.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  selectCategoria(categoria){

    console.log(categoria);

    let url = 'selecionar-categoria.php';
  
    this.service.post(url, categoria.categoria_id ).subscribe(
      data => {

        console.log(data);
        const modal = this.modalCtrl.create( ModalDespesaComponent, {data: data });
        modal.present();

        // if(this.user != 'Erro'){
          
        // }
        // else{
        //   // this.service.hideLoading();
        //   // this.modalError('Usuário ou Senha inválidos!');  
        // } 
      },
      err => {
        // this.service.hideLoading();
        // this.modalError(err.status+' - '+err.statusText);
  
        console.log(err);
      }
    );
  }
  carregarCategorias(classe){

  // this.service.showLoading();

    let url = 'selecionar-categorias.php';

    this.service.post(url, classe ).subscribe(
      data => {

        this.classe = data;
        this.categorias = this.classe.categorias;

        console.log(this.categorias);


      },
      err => {
        // this.service.hideLoading();
        // this.modalError(err.status+' - '+err.statusText);
  
        console.log(err);
      }
    );

  }
  selectProduto(produto){
    console.log(produto);
    const modal = this.modalCtrl.create( ModalDespesaComponent, {data: produto });
    modal.present();
  }
  closeModal(){
    this.viewCtrl.dismiss();
  }
  toRelatorios(){
    this.navCtrl.push(RelatoriosPage);
  }
}
