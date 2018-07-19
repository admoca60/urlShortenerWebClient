import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,MatCheckboxModule,MatFormFieldModule,MatRadioModule,MatSelectModule,MatInputModule,MatTooltipModule,MatTableModule } from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';

@NgModule({
  imports: [MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,MatCheckboxModule,LayoutModule,MatFormFieldModule, MatRadioModule,MatSelectModule,MatInputModule,MatTooltipModule,MatTableModule,CdkTableModule ],
  exports: [MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,MatCheckboxModule,LayoutModule,MatFormFieldModule,MatRadioModule,MatSelectModule,MatInputModule,MatTooltipModule,MatTableModule,CdkTableModule ],
})
export class AngularMaterialComponentModule { }
