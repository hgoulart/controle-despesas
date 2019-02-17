import { NgModule } from '@angular/core';
import { ModalDespesaComponent } from './modal-despesa/modal-despesa';
import { LoadingComponent } from './loading/loading';
import { ModalAlertComponent } from './modal-alert/modal-alert';
@NgModule({
	declarations: [ModalDespesaComponent,
    LoadingComponent,
    ModalAlertComponent],
	imports: [],
	exports: [ModalDespesaComponent,
    LoadingComponent,
    ModalAlertComponent]
})
export class ComponentsModule {}
