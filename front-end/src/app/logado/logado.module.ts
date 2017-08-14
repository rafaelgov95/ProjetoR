import { LogadoRoutingModule } from './logado-routing.module';
import { LogadoComponent } from './logado.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';


import { HeaderComponent, SidebarComponent } from '../shared';

@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule.forRoot(),
        LogadoRoutingModule,
        TranslateModule
    ],
    declarations: [
        LogadoComponent,
        HeaderComponent,
        SidebarComponent
    ]
})
export class LogadoModule { }
