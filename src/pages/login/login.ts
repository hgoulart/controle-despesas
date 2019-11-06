import { Component } from '@angular/core';
import { Platform, NavController, NavParams, ModalController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { HomePage } from '../home/home';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CadastroPage } from '../cadastro/cadastro';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  userData: any;
   formData =  {"email":"","pass":""};
  loading: any;
  usuario: any = {
    usuario_id : 0,
    usuario_nome : "",
    usuario_email : ""
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
    this.navCtrl.push(CadastroPage);
  }
  async Login(){

    if(this.formData.email != '' && this.formData.pass != ''){

      console.log(this.formData);

      // this.navCtrl.setRoot(TabsPage);

      this.service.showLoading();

      setTimeout(()=>{

        let url = 'login.php';

        // let loginUser = this.service.get()+ url;
  
        this.service.post(url, this.formData).subscribe(
          data => {
  
            this.usuario = data;

            console.log(this.usuario);
  
            if(this.usuario != 'Erro'){
              this.service.setUser(this.usuario);

              this.service.hideLoading();
              this.navCtrl.setRoot(HomePage);
              this.navCtrl.popToRoot();

              

              // if(this.user.user_admin == '1'){
              //   console.log(this.user);
              //   this.service.hideLoading();
              //   this.navCtrl.setRoot(DashboardPage);
              //   this.navCtrl.popToRoot();
    
              // }else{
              //   this.navCtrl.setRoot(HomePage);
              //   this.navCtrl.popToRoot();
              //   console.log(this.user);
              // }
              
            }
            else{
              alert("Erro");
              this.service.hideLoading();
              // this.modalError('Usuário ou Senha inválidos!');  
            } 
          },
          err => {
            alert("Erro");
            this.service.hideLoading();
            // this.modalError(err.status+' - '+err.statusText);
      
            console.log(err);
          }
        );
      }, 1000);

    }else{
      this.service.hideLoading();
      alert("Existem campos vazios!");
    }
  }
  toRecoverPassword(){
    // this.navCtrl.setRoot(RecoverPasswordPage);
  }

  editProfile(){
    // this.navCtrl.push(RegisterPage);
  }
}
