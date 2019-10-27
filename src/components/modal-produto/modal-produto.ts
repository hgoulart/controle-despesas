import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

@Component({
  selector: 'modal-produto',
  templateUrl: 'modal-produto.html'
})
export class ModalProdutoComponent {

  produtos: any;
  dados: any =  {
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
  produto: any = {
    produto: '',
    categoria: '',
    quantidade: 1,
    valor: '',
    total: '',
    data: '',
    preco_id: ''
  };

  constructor(private service: ServiceProvider, public viewCtrl: ViewController, params: NavParams) {
    console.log('Hello ModalProdutoComponent Component');

    this.dados = params.get('data');
    console.log(this.dados);
    this.getProdutos(this.dados.m_categoria_id);
  }

  onStateChange(event){
    console.log(event);
    this.produto.categoria = this.dados.m_categoria_id;
    this.produto.produto = event;
    this.produto.preco_id = this.dados.preco_id;
    this.produto.data = this.dados.data;

    console.log(this.produto);


  }

  incluirProduto(){

    this.service.showLoading();
    console.log('loading');

    if(this.produto.categoria == 4){
      let str = ''+this.produto.total / this.produto.valor;
      let res = str.substring(0, 5);
      this.produto.quantidade = res;
    }

    console.log(this.produto);
  
    setTimeout(()=>{

      let url = 'salvar-item.php';

      this.service.post(url, this.produto).subscribe(
        data => {
          console.log(data);
          if(data === true){
            this.closeModal();
          }
          this.service.hideLoading();
        },
        err => {
          alert("Erro");
          this.service.hideLoading();
          // this.modalError(err.status+' - '+err.statusText);
    
          console.log(err);
        }
      );
    }, 2000);
  }

  getProdutos(id){
    console.log(id);
 
    this.service.showLoading();
    setTimeout(()=>{
  
      let url = "selecionar-produtos.php";

      this.service.post(url, id ).subscribe(data=>{
  
        this.produtos = data;
        console.log(this.produtos);
        
      })

      this.service.hideLoading();
    }, 1000);
  }
  closeModal(){
    this.viewCtrl.dismiss();
  }
}
