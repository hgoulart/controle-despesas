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
  categorias: any;
  produtos: any;
  hasSearch: boolean = false;
  categiaSelecionada: any;
  categoriaForm;
  categoriasName;
  categoria: any;
  items: any;

  constructor(public viewCtrl: ViewController, params: NavParams, public modalCtrl: ModalController, public navCtrl: NavController, private formBuilder: FormBuilder, private service: ServiceProvider) {

    this.categoriaForm = new FormGroup({
      "categoriasName": new FormControl({value: '', disabled: false})
    });

    this.categoria = params.get('data');
    console.log(this.categoria);
        // this.initializeItems();
    this.carregarItems(this.categoria);

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
  initializeItems() {

  }
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.hasSearch = true;
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  selectItem(item){

    console.log(item);

    let url = 'selecionar-item.php';
  
    this.service.post(url, item.item_id ).subscribe(
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
  carregarItems(categoria){

  // this.service.showLoading();

    let url = 'selecionar-items.php';

    this.service.post(url, categoria ).subscribe(
      data => {

        this.categoria = data;
        this.items = this.categoria.items;

        console.log(this.items);


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
