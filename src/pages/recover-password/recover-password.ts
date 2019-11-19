import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceProvider } from '../../providers/service/service';
import { LoginPage } from '../login/login';
import { ModalErrorComponent } from '../../components/modal-error/modal-error';
import { ModalSuccessComponent } from '../../components/modal-success/modal-success';

@Component({
  selector: 'page-recover-password',
  templateUrl: 'recover-password.html',
})
export class RecoverPasswordPage {

  passRecoverForm: FormGroup;
  formData =  {"email":"hingorocha@gmail.com"};
  emailKey: any= {
    user_address: '',
    user_email : '',
    user_key : ''
  };

  constructor( public modalCtrl: ModalController, private formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams, private service: ServiceProvider ) {
    this.passRecoverForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ionViewDidLoad() {
    console.log('RecoverPasswordPage');
  }
  //ENVIAR O EMAIL COM A NOVA SENHA PARA O USUÁRIO
  sendEmail(){

    if(this.passRecoverForm.valid){

      this.service.showLoading();

      setTimeout(()=>{

        let url = 'send-new-password.php';
  
        this.service.post( url, this.passRecoverForm.value ).subscribe(
          data => {
  
            let responseData = data;
  
            if(responseData != 'Erro'){
            
              this.emailKey = responseData;

              this.navCtrl.push(LoginPage, { data: responseData});
              this.modalSuccess('Senha enviada para: '+this.emailKey.user_email);
              this.service.hideLoading();
              
            }
            else{
              this.service.hideLoading();
              this.modalError('Email inválido!');    
            } 
          },
          err => {
            this.service.hideLoading();
            this.modalError(err.status+' - '+err.statusText);
            console.log(err);
          }
        );
      }, 1000);

    }else{
      this.modalError("Existem campos vazios!");
    }
  }
  toLogin(){
    this.navCtrl.setRoot(LoginPage);
  }
  modalError(message) {
    let modalError = this.modalCtrl.create(ModalErrorComponent, {data: message});
    modalError.present();
  }
  modalSuccess(message) {
    let modalSuccess = this.modalCtrl.create(ModalSuccessComponent, {data: message});
    modalSuccess.present();
  }
}
