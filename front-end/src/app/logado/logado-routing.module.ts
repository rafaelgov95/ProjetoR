import { LogadoComponent } from './logado.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '', component: LogadoComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'configuracoes', loadChildren: './configuracoes/configuracoes.module#ConfiguracoesModule' },
            { path: 'gerente', loadChildren: './gerente/gerente.module#GerenteModule' },
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },    
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LogadoRoutingModule { }
