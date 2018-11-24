import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// tslint:disable-next-line:max-line-length
import { MatListModule, MatButtonModule, MatToolbarModule, MatInputModule,
     MatProgressSpinnerModule, MatCardModule, MatSelectModule, MatFormFieldModule,
     MatRadioModule,MatRippleModule } from '@angular/material';

@NgModule({
    imports: [MatRippleModule, MatRadioModule, MatFormFieldModule, MatListModule, MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatSelectModule],
    exports: [MatRippleModule, MatRadioModule, MatFormFieldModule, MatListModule, MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatSelectModule]
})
export class MaterialModule { }
