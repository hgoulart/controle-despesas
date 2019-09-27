import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ServiceProvider } from '../../providers/service/service';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  formData =  {"nome": "", "email":"","password":""};
  loading: any;

  constructor( private service: ServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }
  public register(form){
    console.log(form);

    if(form.email != '' && form.password != ''){

      this.service.showLoading();

      setTimeout(()=>{

        let url = 'salvar-usuario.php';

        // let loginUser = this.service.get()+ url;
  
        this.service.post(url, form).subscribe(
          data => {
            console.log(data);
            if(data != 'Erro'){

              this.service.showLoading();
              alert("Salvo com sucesso!");
              this.navCtrl.push(LoginPage);
            }
            else{
              alert("Erro");
              this.service.showLoading();
              // this.modalError('Usuário ou Senha inválidos!');  
            } 
          },
          err => {
            alert("Erro");
            this.service.showLoading();
            // this.modalError(err.status+' - '+err.statusText);
      
            console.log(err);
          }
        );
      }, 1000);

    }else{
      alert("Existem campos vazios!");
    }
  }
  public cancelRegister(){
    this.navCtrl.push(LoginPage);
  }

}
