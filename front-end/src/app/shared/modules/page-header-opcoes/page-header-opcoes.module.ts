import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PageHeaderOpcoesComponent } from './page-header-opcoes.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [PageHeaderOpcoesComponent],
    exports: [PageHeaderOpcoesComponent]
})
export class PageHeaderOpcoesModule { }
