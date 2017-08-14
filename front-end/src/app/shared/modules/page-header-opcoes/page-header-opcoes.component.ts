import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-page-header-opcoes',
    templateUrl: './page-header-opcoes.component.html',
    styleUrls: ['./page-header-opcoes.component.scss']
})
export class PageHeaderOpcoesComponent {
    @Input() heading: string;
    @Input() icon: string;
}
