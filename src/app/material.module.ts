import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// tslint:disable-next-line:max-line-length
import { MatListModule, MatButtonModule, MatToolbarModule, MatInputModule,
     MatProgressSpinnerModule, MatCardModule, MatSelectModule, MatFormFieldModule } from '@angular/material';

@NgModule({
    imports: [MatFormFieldModule, MatListModule, MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatSelectModule],
    exports: [MatFormFieldModule, MatListModule, MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatSelectModule]
})
export class MaterialModule { }
