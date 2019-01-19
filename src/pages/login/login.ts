import { Component } from '@angular/core';
import { Platform, NavController, NavParams, ModalController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { HomePage } from '../home/home';
// import { RegisterPage } from '../register/register';
// import { DashboardPage } from '../dashboard/dashboard';
// import { RecoverPasswordPage } from '../recover-password/recover-password';
// import { ModalErrorComponent } from '../../components/modal-error/modal-error';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  userData: any;
  // formData =  {"email":"admin@email.com","pass":"123"};
  formData =  {"email":"hingorocha@gmail.com","pass":"123"};
  //  formData =  {"email":"","pass":""};
  user: any = {
    user_id : 0,
    user_name : "",
    user_email : "",
    user_cpf: "",
    user_admin : 0
  };

  constructor( public modalCtrl: ModalController, platform: Platform, public navCtrl: NavController, private service: ServiceProvider, public navParams: NavParams, private splashScreen: SplashScreen) {
    // this.loginForm = this.formBuilder.group({
    //   // email: ['admin@email.com', [Validators.required, Validators.email]],
    //   email: ['', [Validators.required, Validators.email]],
    //   pass: ['', [Validators.required, Validators.minLength(3)]]
    // });
    //'198d54'
    platform.ready().then(() => {

      this.splashScreen.hide();
    });
    
  }

  
  ionViewDidLoad() {
    console.log('LoginPage');
  }
  toRegister(){
    // this.navCtrl.push(RegisterPage);
  }
  async Login(){

    this.navCtrl.setRoot(HomePage);
    this.navCtrl.popToRoot();

    // if(this.formData.email != '' && this.formData.pass != ''){

    //   console.log(this.formData);

    //   // this.navCtrl.setRoot(TabsPage);

    //   this.service.showLoading();

    //   setTimeout(()=>{

    //     let url = 'login.php';

    //     // let loginUser = this.service.getUrl()+ url;
  
    //     this.service.post(url, this.formData).subscribe(
    //       data => {
  
    //         this.user = data;

    //         console.log(this.user);
  
    //         if(this.user != 'Erro'){

    //           this.service.setUser(this.user);

    //           if(this.user.user_admin == '1'){
    //             console.log(this.user);
    //             this.service.hideLoading();
    //             this.navCtrl.setRoot(DashboardPage);
    //             this.navCtrl.popToRoot();
    
    //           }else{
    //             this.navCtrl.setRoot(HomePage);
    //             this.navCtrl.popToRoot();
    //             console.log(this.user);
    //           }
              
    //         }
    //         else{
    //           this.service.hideLoading();
    //           this.modalError('Usuário ou Senha inválidos!');  
    //         } 
    //       },
    //       err => {
    //         this.service.hideLoading();
    //         this.modalError(err.status+' - '+err.statusText);
      
    //         console.log(err);
    //       }
    //     );
    //   }, 1000);

    // }else{
    //   this.modalError("Existem campos vazios!");
    // }
  }
  toRecoverPassword(){
    // this.navCtrl.setRoot(RecoverPasswordPage);
  }
  // modalError(message) {
  //   let modaError = this.modalCtrl.create(ModalErrorComponent, {data: message});
  //   modaError.present();
  // }
  editProfile(){
    // this.navCtrl.push(RegisterPage);
  }
}
