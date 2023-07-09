import { NgModule } from "@angular/core";

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from "@angular/material/button";
import {MatProgressBarModule} from '@angular/material/progress-bar';

const matModules = [
    MatToolbarModule,MatInputModule,MatButtonModule, MatProgressBarModule
] 

@NgModule({
    imports: matModules,
    exports: matModules
})
export class MaterialModule { }