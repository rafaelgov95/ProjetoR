import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgmCoreModule } from '@agm/core';
import {MapsComponent} from './maps.component';

@NgModule({
    imports: [
        CommonModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDYeNFzbOHKshPnZ11jefzhIlvUmufvr5w'
        })
        
         ],
    declarations: [
     
        MapsComponent
        

    ],exports:[MapsComponent]
})
export class MapsModule { }
