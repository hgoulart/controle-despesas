import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { ModalProdutoComponent } from '../../components/modal-produto/modal-produto';
import { LoginPage } from '../login/login';
import * as moment from 'moment';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-relatorios',
  templateUrl: 'relatorios.html',
})
export class RelatoriosPage {

  movimentacao:any = new Array();
  searchDate: string;
  today: string;
  date: string;
  hasOrder: boolean;
  statusSelected: any = 1;
  status: any;
  waiting: number = 0;
  inProd: number = 0;
  out: number = 0;
  delivered: number = 0;
  totalEntrada: any = 0;
  totalSaida: any = 0;
  entradaPreco: any = new Array();
  entradaNome: any= new Array();
  saidaPreco: any = new Array();
  saidaNome: any= new Array();
  barChartData: any;
  barChartLabels: any;
  doughnutChartLabels:string[];
  doughnutChartData:number[];
  doughnutChartType:string;
  doughnutChartOptions: any;
  chart: any;
  categorias: any;

  constructor(  public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, private service: ServiceProvider ) {
    this.searchDate = moment().format();
    this.today = moment().format();
    this.hasOrder = false;
    this.chart = {
      salario : [],
      deposito : [],
      entretenimento : [],
      veiculo : [],
      roupa : [],
      comunicacao : [],
      comerFora : [],
      presente : [],
      alimentacao : [],
      saude : [],
      casa : [],
      higienePessoal : [],
      pet : [],
      esporte : []
    };
    this.categorias ={
      nome : [],
      total : []
    }
  }

  ionViewDidLoad() {
    console.log('relatorios');
    // this. carregarMovimentacao();
    
  }
  search(){
    this.entradaPreco = new Array();
    this.saidaPreco = new Array();
    this.movimentacao =  new Array();
    this.carregarMovimentacao();
  }
  newSearch(){
    this.movimentacao = null;
    this.barChartData = null;
    this.doughnutChartData = null;
  }
  carregarMovimentacao(){
    this.date = this.searchDate.substring(0, 7);

    console.log(this.date);

    let usuario = this.service.getUser();
    console.log(usuario);
    this.service.showLoading();
  
    let url = 'selecionar-movimentacao-agrupada.php';
  
    this.service.post(url, {id: usuario.usuario_id, data: this.date}).subscribe(
      data => {

        console.log(data);
  
      this.movimentacao = data;

      let salario: number = 0;
      let deposito: number = 0;
      let entretenimento: number = 0;
      let veiculo: number = 0;
      let roupa: number = 0;
      let comunicacao: number = 0;
      let comerFora: number = 0;
      let presente: number = 0;
      let alimentacao: number = 0;
      let saude: number = 0;
      let casa: number = 0;
      let higienePessoal: number = 0;
      let pet: number = 0;
      let esporte: number = 0;

      for(let categoria of this.movimentacao){

          if(categoria.m_categoria_id == 1){
            salario += (+categoria.preco);
            this.chart['salario'].push(categoria);
            this.chart['salario'].total = salario;
          }else if(categoria.m_categoria_id == 2){
            deposito += (+categoria.preco);
            this.chart['deposito'].push(categoria);
            this.chart['deposito'].total = deposito;
          }else if(categoria.m_categoria_id == 3){
            entretenimento += (+categoria.preco);
            this.chart['entretenimento'].push(categoria);
            this.chart['entretenimento'].total = entretenimento;
          }else if(categoria.m_categoria_id == 4){
            veiculo += (+categoria.preco);
            this.chart['veiculo'].push(categoria);
            this.chart['veiculo'].total = veiculo;
          }else if(categoria.m_categoria_id == 5){
            roupa += (+categoria.preco);
            this.chart['roupa'].push(categoria);
            this.chart['roupa'].total = roupa;
          }else if(categoria.m_categoria_id == 6){
            comunicacao += (+categoria.preco);
            this.chart['comunicacao'].push(categoria);
            this.chart['comunicacao'].total = comunicacao;
          }else if(categoria.m_categoria_id == 7){
            comerFora += (+categoria.preco);
            this.chart['comerFora'].push(categoria);
            this.chart['comerFora'].total = comerFora;
          }else if(categoria.m_categoria_id == 8){
            presente += (+categoria.preco);
            this.chart['presente'].push(categoria);
            this.chart['presente'].total = presente;
          }else if(categoria.m_categoria_id == 9){
            alimentacao += (+categoria.preco);
            this.chart['alimentacao'].push(categoria);
            this.chart['alimentacao'].total = alimentacao;
          }else if(categoria.m_categoria_id == 10){
            saude += (+categoria.preco);
            this.chart['saude'].push(categoria);
            this.chart['saude'].total = saude;
          }else if(categoria.m_categoria_id == 11){
            casa += (+categoria.preco);
            this.chart['casa'].push(categoria);
            this.chart['casa'].total = casa;
          }else if(categoria.m_categoria_id == 12){
            higienePessoal += (+categoria.preco);
            this.chart['higienePessoal'].push(categoria);
            this.chart['higienePessoal'].total = higienePessoal;
          }else if(categoria.m_categoria_id == 13){
            pet += (+categoria.preco);
            this.chart['pet'].push(categoria);
            this.chart['pet'].total = pet;
          }else if(categoria.m_categoria_id == 14){
            esporte += (+categoria.preco);
            this.chart['esporte'].push(categoria);
            this.chart['esporte'].total = esporte;
          }


        if(categoria.m_classe_id == 1){
          this.hasOrder = true;
          this.entradaPreco.push(+(categoria.preco));
          this.entradaNome.push(categoria.categoria_nome);
          console.log(categoria.categoria_nome.substring(0,3));
          this.totalEntrada += (+categoria.preco);

        }else{
          this.hasOrder = true;
          this.saidaPreco.push(+(categoria.preco));
          this.saidaNome.push(categoria.categoria_nome.substring(0,4));
          this.totalSaida += (+categoria.preco);
        }
      }

        this.categorias.nome = [
          // 'Salário',
          // 'Depósitos',
          'Entret',
          'Veíc',
          'Roupa',
          'Comun',
          'Com For',
          'Pres',
          'Alimen',
          'Saú',
          'Casa',
          'Hig Pes',
          'Pets',
          'Esp'
        ];
        this.categorias.total = [
          // salario,
          // deposito,
          entretenimento,
          veiculo,
          roupa,
          comunicacao,
          comerFora,
          presente,
          alimentacao,
          saude,
          casa,
          higienePessoal,
          pet,
          esporte
        ];

      console.log(this.categorias);
      console.log(this.movimentacao);
      this.barChartLabels = this.categorias.nome;
      this.barChartData = [
        {data: this.categorias.total, label: 'Despesas'}
      ];

      this.doughnutChartLabels = this.categorias.nome;
      this.doughnutChartOptions = {
        maintainAspectRatio : true
        // scales: {
        //     yAxes: [{
        //         ticks: {
        //             beginAtZero: false
        //         }
        //     }]
        // }
    }
    this.doughnutChartData =  this.categorias.total;
    this.doughnutChartType = 'doughnut';

    setTimeout(()=>{
      this.service.hideLoading();
    },1000);
  
      // if(this.user != 'Erro'){
        
      // }
      // else{
      //   // this.service.hideLoading();
      //   // this.modalError('Usuário ou Senha inválidos!');  
      // } 
      console.log(this.chart);
    },
    err => {
      this.service.hideLoading();
      // this.modalError(err.status+' - '+err.statusText);

      console.log(err);
    }
  );

}
    public barChartOptions:any = {
      scaleShowVerticalLines: false,
      responsive: true
    };
    
    public barChartType:string = 'bar';
    public barChartLegend:boolean = true;

    // events
    public chartClicked(e:any):void {
      console.log(e);
    }
    
    public chartHovered(e:any):void {
      console.log(e);
    }
    // Doughnut
  
    exit(){
      this.navCtrl.setRoot(LoginPage);
      this.navCtrl.popToRoot();
    }
    showModalProduto(categoria){
      categoria.status = !categoria.status;
      categoria.data = this.date;
      console.log(categoria);
      const modal = this.modalCtrl.create( ModalProdutoComponent, {data: categoria });
      modal.present();
    }
    getCategoria(categoria){
      categoria.status = !categoria.status;
    }
    removeItem(){
      console.log('item');
    }
    back(){
      this.navCtrl.push(HomePage);
    }
}
