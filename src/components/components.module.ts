import { NgModule } from '@angular/core';
import { ModalDespesaComponent } from './modal-despesa/modal-despesa';
import { LoadingComponent } from './loading/loading';
import { ModalAlertComponent } from './modal-alert/modal-alert';
import { ModalProdutoComponent } from './modal-produto/modal-produto';
@NgModule({
	declarations: [ModalDespesaComponent,
    LoadingComponent,
    ModalAlertComponent,
    ModalProdutoComponent],
	imports: [],
	exports: [ModalDespesaComponent,
    LoadingComponent,
    ModalAlertComponent,
    ModalProdutoComponent]
})
export class ComponentsModule {}
