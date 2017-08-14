import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-configuracoes',
    templateUrl: './configuracoes.component.html',
    styleUrls: ['./configuracoes.component.scss']
})
export class ConfiguracoesComponent implements OnInit {
    constructor(public router: Router) { }
    ngOnInit() {
        if (this.router.url === '/') {
            this.router.navigate(['/configuracoes']);
        }
    }
}
