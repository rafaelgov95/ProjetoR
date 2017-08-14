import { Estacionamento } from './../../shared/models/estacionamento';

import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


    selectedEstacionamentoNovo: Estacionamento;

    constructor() {
        this.selectedEstacionamentoNovo = new Estacionamento('', '', '', '', '', 1, 1, true);;
    }
    ngOnInit() {
        this.setCurrentPosition()
    }
    private setCurrentPosition() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.selectedEstacionamentoNovo.localizacao.lat = position.coords.latitude;
                this.selectedEstacionamentoNovo.localizacao.lng = position.coords.longitude;
                console.log(this.selectedEstacionamentoNovo)
                var estacionaemnto: Estacionamento;

            });
        }
    }

    AutoC(event) {
        console.log(event)
        this.selectedEstacionamentoNovo = event;
    }
    AutoL(event) {
        console.log(event)
        this.selectedEstacionamentoNovo = event;
    }
}
