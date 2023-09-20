import { Directive } from '@angular/core';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Directive({
  selector: 'input[mask], textarea[mask]',
  standalone: true,
  providers: [provideNgxMask()],
})
export class MaskDirective extends NgxMaskDirective {}
