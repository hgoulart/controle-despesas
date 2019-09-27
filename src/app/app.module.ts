import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePt);

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { DespesasPage } from '../pages/despesas/despesas';
import { RelatoriosPage } from '../pages/relatorios/relatorios';
import { CadastroPage } from '../pages/cadastro/cadastro';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServiceProvider } from '../providers/service/service';
import { ModalDespesaComponent } from '../components/modal-despesa/modal-despesa';
import { LoadingComponent } from '../components/loading/loading';
import { ModalAlertComponent } from '../components/modal-alert/modal-alert';

import { HttpClientModule } from '@angular/common/http';
import { IonMaskModule } from '@pluritech/ion-mask';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { NgxCurrencyModule } from "ngx-currency";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    DespesasPage,
    RelatoriosPage,
    ModalDespesaComponent,
    LoadingComponent,
    ModalAlertComponent,
    CadastroPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    FormsModule,
    TextMaskModule,
    BrMaskerModule,
    NgxCurrencyModule,
    IonMaskModule.forRoot(),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    DespesasPage,
    RelatoriosPage,
    ModalDespesaComponent,
    LoadingComponent,
    ModalAlertComponent,
    CadastroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider
  ]
})
export class AppModule {}
