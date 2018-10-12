import { NgModule } from '@angular/core';
import { TimeStampPipe } from './time-stamp';

const COMMON_PIPES = [
  TimeStampPipe
];

@NgModule({
  declarations: COMMON_PIPES,
  exports: COMMON_PIPES,
})
export class PipesModule {}
