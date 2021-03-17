import { NgModule } from '@angular/core';
import { ModalDespesaComponent } from './modal-despesa/modal-despesa';
import { LoadingComponent } from './loading/loading';
import { ModalAlertComponent } from './modal-alert/modal-alert';
import { ModalProdutoComponent } from './modal-produto/modal-produto';
import { ModalErrorComponent } from './modal-error/modal-error';
import { ModalSuccessComponent } from './modal-success/modal-success';
@NgModule({
	declarations: [ModalDespesaComponent,
    LoadingComponent,
    ModalAlertComponent,
    ModalProdutoComponent,
    ModalErrorComponent,
    ModalSuccessComponent],
	exports: [ModalDespesaComponent,
    LoadingComponent,
    ModalAlertComponent,
    ModalProdutoComponent,
    ModalErrorComponent,
    ModalSuccessComponent]
})
export class ComponentsModule {}
