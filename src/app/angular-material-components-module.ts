import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,MatCheckboxModule,MatFormFieldModule,MatRadioModule,MatSelectModule,MatInputModule,MatTooltipModule} from '@angular/material';

@NgModule({
  imports: [MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,MatCheckboxModule,LayoutModule,MatFormFieldModule, MatRadioModule,MatSelectModule,MatInputModule,MatTooltipModule],
  exports: [MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,MatCheckboxModule,LayoutModule,MatFormFieldModule,MatRadioModule,MatSelectModule,MatInputModule,MatTooltipModule],
})
export class AngularMaterialComponentModule { }
