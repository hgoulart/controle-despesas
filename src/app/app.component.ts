import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { CadastroProdutosPage } from '../pages/cadastro-produtos/cadastro-produtos';
import { RecoverPasswordPage } from '../pages/recover-password/recover-password';
import { RelatoriosPage } from '../pages/relatorios/relatorios';
import { DespesasPage } from '../pages/despesas/despesas';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'ios-home-outline' },
      { title: 'Dashboard', component: RelatoriosPage, icon: 'ios-stats-outline' },
      { title: 'Cadastrar Produto', component: CadastroProdutosPage, icon: 'ios-add-outline' },
      { title: 'Login', component: LoginPage, icon: 'ios-person-outline' },
      { title: 'Recuperar Senha', component:  RecoverPasswordPage, icon: 'ios-unlock-outline' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
