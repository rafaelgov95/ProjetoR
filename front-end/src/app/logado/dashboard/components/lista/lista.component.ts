import { Observable } from 'rxjs';
import { Component, EventEmitter, Output, Input, OnChanges, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  @Output() emit = new EventEmitter();
  errorMessage: string;
  // estacinamentos: Estacionamento[];
  


  // selectedEstacionamento: Estacionamento;


  // constructor(private estaci: EstacionamentoService) {
  //     this.selectedEstacionamento = new Estacionamento('','','','','',1,1,true);
  // }

  // onSelect(estacinamento: Estacionamento): void {
  
  //   this.selectedEstacionamento = estacinamento;
  //   // esta
  //   this.emit.emit( this.selectedEstacionamento);
  // }

  ngOnInit() {
    // this.getEstaciomentos();
    // console.log(this.estacinamentos);


  }

  // getEstaciomentos() {
  //   this.estaci.getAll()
  //     .subscribe(
  //     (ListaEstacionamentos: Estacionamento[]) => this.estacinamentos = ListaEstacionamentos,
  //     error => this.errorMessage = <any>error);
  // }

}