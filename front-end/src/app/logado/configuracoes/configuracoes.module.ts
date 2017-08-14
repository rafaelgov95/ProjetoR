import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfiguracoesComponent } from './configuracoes.component';
import { ConfiguracoesRoutingModule } from './configuracoes-routing.module';
import { PageHeaderModule } from './../../shared';
import {PageHeaderOpcoesModule} from './../../shared/modules/page-header-opcoes/page-header-opcoes.module'
@NgModule({
    imports: [
        CommonModule,
        ConfiguracoesRoutingModule,
        // PageHeaderModule,
        PageHeaderOpcoesModule
    ],
    declarations: [ConfiguracoesComponent]
})
export class ConfiguracoesModule { }
