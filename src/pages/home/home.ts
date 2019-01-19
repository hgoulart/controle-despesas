import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import {Validators, FormBuilder } from '@angular/forms';
import { ServiceProvider } from '../../providers/service/service';
import { ModalDespesaComponent } from '../../components/modal-despesa/modal-despesa';
import { FormGroup, FormControl } from '@angular/forms';
import { DespesasPage } from '../despesas/despesas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  categorias: any;

  constructor( public modalCtrl: ModalController, public navCtrl: NavController, private formBuilder: FormBuilder, private service: ServiceProvider ) {
    
  }
  ionViewDidLoad() {
    console.log(' HomesPage');
    this.carregarCategorias();
  }
  public toSaidas(){
    this.navCtrl.push(DespesasPage, {data: 2 });
  }
  public toEntradas(){
    this.navCtrl.push(DespesasPage);
  }
  carregarCategorias(){

  // this.service.showLoading();

    let url = 'selecionar-categorias.php';

    this.service.get(url).subscribe(
      data => {

        this.categorias = data;

        console.log(this.categorias);

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
}
