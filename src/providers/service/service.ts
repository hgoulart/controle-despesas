import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class ServiceProvider {

  API_url: string = "http://localhost/controle-despesas-api/data/api/";
  categorias: any;

  constructor(public http: HttpClient) {
    console.log('Hello ServiceProvider Provider');
  }
  get(url){
    // return this.categorias = [
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
}
//http://localhost/controle-despesas-api/data/api/selecionar-categorias.php