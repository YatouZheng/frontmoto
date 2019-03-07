import { NgModule } from '@angular/core';
import { 
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatProgressBarModule,
  MatInputModule,
  MatRippleModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';


const Meterial =  [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatProgressBarModule,
  MatInputModule,
  MatRippleModule,
  MatToolbarModule,
  MatTooltipModule,
]

@NgModule({
  imports: [ Meterial ],
  exports: [ Meterial ]
})
export class MeterialModule { }
