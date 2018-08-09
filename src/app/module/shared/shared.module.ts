import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CellRenderPipe } from './pipe/cell-render/cell-render.pipe';
import { ZipValidatorDirective } from './directive/validator/zip/zip-validator.directive';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CellRenderPipe, ZipValidatorDirective],
  exports: [
    CellRenderPipe,
    FormsModule,
    ZipValidatorDirective
  ]
})
export class SharedModule { }
