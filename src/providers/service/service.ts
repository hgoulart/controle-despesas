import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class ServiceProvider {

  API_url: string = "http://localhost/controle-despesas-api/data/api/";

  categorias: any;
  classes: any;
  usuario: any = {
    usuario_id: 0,
    usuario_nome: '',
    usuario_email: '',

  };
  loading: any;

  constructor(public http: HttpClient, public loadingCtrl: LoadingController) {
    console.log('Hello ServiceProvider Provider');
  }
  get(url){
    // return this.classes = [
    //   {id: 1, nome: 'Alimento'},{id: 2, nome: 'Conta Fixa'},{id: 3, nome: 'Happy Hour'},{id: 4,nome: 'Veículo'}
    // ];
    return this.http.get(this.API_url+url);
  }
  getParameter(url, data){
    return this.http.get(this.API_url+url, data);
  }
  post(url, data){
    return this.http.post(this.API_url+url, data, httpOptions);
  }
  setUser(usuario){
    this.usuario = usuario;
  }
  getUser(){
    return this.usuario;
  }
  // showLoading(): boolean{
  //   return document.getElementsByClassName("show-loading")[0].classList.toggle("show");
  // }
  showLoading() {
    this.loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `
      <div padding class="show-loading">
        <div class="msg-container">
            <img src="../assets/imgs/loading.svg" alt="" class="msg-return">
            <p>Carregando...</p>
        </div>
      </div>
     `
    });
  
    this.loading.onDidDismiss(() => {
      console.log('Dismissed loading');
    });
  
    this.loading.present();
  }
  hideLoading() {
    setTimeout(() => {
      this.loading.dismiss();
    }, 2000);
  }
  
}
//http://localhost/controle-despesas-api/data/api/selecionar-classes.php