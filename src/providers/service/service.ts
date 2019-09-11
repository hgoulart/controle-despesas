import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class ServiceProvider {

<<<<<<< HEAD
  // API_url: string = "http://localhost/controle-despesas-api/data/api/";
  API_url: string  = "http://hingorocha.com.br/homologaprojeto/despesas-api/data/api/";
  categorias: any;
=======
  API_url: string = "http://localhost/controle-despesas-api/data/api/";
  // API_url: string  = "http://hingorocha.com.br/homologaprojeto/despesas-api/data/api/";
  classes: any;
>>>>>>> dec1ab2ef8ced1db904693ad4f8c1a9dd5daf474
  usuario: any = {
    usuario_id: 0,
    usuario_nome: '',
    usuario_email: '',

  }

  constructor(public http: HttpClient) {
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
  showLoading(): boolean{
    return document.getElementsByClassName("show-loading")[0].classList.toggle("show");
  }
}
//http://localhost/controle-despesas-api/data/api/selecionar-classes.php