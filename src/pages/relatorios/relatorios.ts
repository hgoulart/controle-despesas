import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { ModalAlertComponent } from '../../components/modal-alert/modal-alert';
import { LoginPage } from '../login/login';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-relatorios',
  templateUrl: 'relatorios.html',
})
export class RelatoriosPage {

  movimentacao:any = new Array();
  searchDate: string;
  today: string;
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
  chart: any = new Array();

  constructor(  public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, private service: ServiceProvider ) {
    this.searchDate = moment().format();
    this.today = moment().format();
    this.hasOrder = false;
    this.teste();
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
    this.teste();
  }
  carregarMovimentacao(){
    let date = this.searchDate.substring(0, 7);

    console.log(date);

    let usuario = this.service.getUser();
    console.log(usuario);
    this.service.showLoading();
  
    let url = 'selecionar-movimentacao.php';
  
    this.service.post(url, {id: usuario.usuario_id, data: date}).subscribe(
      data => {
  
      this.movimentacao = data;

      console.log(this.movimentacao);
      
      for(let categoria of this.movimentacao){
        console.log(categoria);

        let categ = categoria.m_categoria_id;
        
        // categoria.preco = categoria.preco.replace(/\,/g, "").replace(/\./g, "");
        for(let cat of this.movimentacao){
          if(categ === cat.m_categoria_id){
            this.chart.push(cat);
          }
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
          
      console.log(this.movimentacao);
      this.barChartLabels = this.saidaNome;
      this.barChartData = [
        {data: this.saidaPreco, label: 'Despesas'}
      ];

      this.doughnutChartLabels = this.saidaNome;
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
    this.doughnutChartData =  this.saidaPreco;
    this.doughnutChartType = 'doughnut';

    setTimeout(()=>{
      this.service.showLoading();
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
      // this.service.hideLoading();
      // this.modalError(err.status+' - '+err.statusText);

      console.log(err);
    }
  );

}
teste(){
  let date = this.searchDate.substring(0, 7);

  console.log(date);

  let usuario = this.service.getUser();
  console.log(usuario);
  // this.service.showLoading();

  let url = 'selecionar-movimentacao-agrupada.php';

  this.service.post(url, {id: usuario.usuario_id, data: date}).subscribe(
    data => {

  console.log(data);
      
  // setTimeout(()=>{
  //   this.service.showLoading();
  // },1000);

  },
  err => {
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

    getCategoria(categoria){
      console.log(categoria);
      const modal = this.modalCtrl.create( ModalAlertComponent, {data: categoria });
      modal.present();
    }

}
