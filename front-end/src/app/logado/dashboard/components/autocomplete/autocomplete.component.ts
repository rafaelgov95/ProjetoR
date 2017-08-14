import { Estacionamento } from './../../../../shared/models/estacionamento';

import { EstacionamentoService } from './../../../../shared/services/estacionamento/EstacionamentoService.service';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'autocomplete-map',
  templateUrl: 'autocomplete.component.html',
})
export class AutocompleteComponent implements OnInit {
  stateCtrl: FormControl;
  filteredStates: any;
  ListaEstacionamentos: Estacionamento[];
  selectedEstacionamento: Estacionamento;
  errorMessage: string;

  @Output() Emite = new EventEmitter();
  constructor(private service: EstacionamentoService,

  ) {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
      .startWith(null)
      .map(estacionamento => this.filterStates(estacionamento));
  }
  ngOnInit() {
    this.getEstaciomentos();
    console.log(this.ListaEstacionamentos);


  }

  getEstaciomentos() {
    this.service.getAll()
      .subscribe(
      (ListaEstacionamentos: Estacionamento[]) => this.ListaEstacionamentos = ListaEstacionamentos,
      error => this.errorMessage = <any>error);
  }

  filterStates(val: string) {
    return val ? this.ListaEstacionamentos.filter(s => s.nome.toLowerCase().indexOf(val.toLowerCase()) === 0)
      : this.ListaEstacionamentos;
  }
  onSelect(estacinamento: Estacionamento): void {
    this.selectedEstacionamento = estacinamento;
    console.log('MeuTeste', this.selectedEstacionamento);
    this.Emite.emit(this.selectedEstacionamento);
  }
}