import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import {Validators, FormBuilder } from '@angular/forms';
import { ServiceProvider } from '../../providers/service/service';
import { ModalDespesaComponent } from '../../components/modal-despesa/modal-despesa';
import { FormGroup, FormControl } from '@angular/forms';
import { DespesasPage } from '../despesas/despesas';
import { RelatoriosPage } from '../relatorios/relatorios';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  classes: any;

  constructor( public modalCtrl: ModalController, public navCtrl: NavController, private formBuilder: FormBuilder, private service: ServiceProvider ) {
    
  }
  ionViewDidLoad() {
    console.log(' HomesPage');
    this.carregarClasses();
  }
  public toSaidas(){
    this.navCtrl.push(DespesasPage, {data: 2 });
  }
  public toEntradas(){
    this.navCtrl.push(DespesasPage, {data: 1 });
  }
  carregarClasses(){

  // this.service.showLoading();

    let url = 'selecionar-classes.php';

    this.service.get(url).subscribe(
      data => {

        this.classes = data;

        console.log(this.classes);

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

  toRelatorios(){
    this.navCtrl.push(RelatoriosPage);
  }
}
