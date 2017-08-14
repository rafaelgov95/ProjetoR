import { Estacionamento } from './../../../../shared/models/estacionamento';
import { Component, OnInit, Input } from '@angular/core';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  @Input() est: Estacionamento;

  constructor() {
    
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude)
  console.log(position.coords.longitude )
          this.est.lat= position.coords.latitude;
        this.est.lng = position.coords.longitude;
      });
    }
  }
  ngOnInit() {
    this.setCurrentPosition()
  }

}
