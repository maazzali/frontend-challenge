import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/module';


const COMMON_MODULES = [
  NgCommonModule,
  HttpClientModule,
  FormsModule,
  PipesModule
];

@NgModule({
  declarations: [],
  imports: [],
  exports: [COMMON_MODULES],
})
export class SharedModule {}
