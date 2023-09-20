import 'zone.js/dist/zone';
import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { InputComponent } from './input/input.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { IMaskConfig } from './entities/mask-config.interface';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    InputComponent,
    ReactiveFormsModule,
    NgxMaskDirective,
    CommonModule,
  ],
  providers: [provideNgxMask(), DecimalPipe],
  templateUrl: './main.html',
})
export class App implements OnInit {
  @ViewChild('input', { static: true, read: ElementRef })
  input: ElementRef<HTMLInputElement>;

  form = new FormGroup({
    ngxMaskInputTest: new FormControl(null),
    customInput: new FormControl(''),
  });

  protected maskConfig: IMaskConfig = {
    mask: '00H : 00M : 00S',
    options: {
      patterns: {
        H: {
          pattern: new RegExp('H'),
        },
        M: {
          pattern: new RegExp('M'),
        },
        S: {
          pattern: new RegExp('S'),
        },
        D: {
          pattern: new RegExp('D'),
        },
        0: {
          pattern: new RegExp('\\d'),
        },
      },
      specialCharacters: [':', ' ', 'D', 'H', 'M', '\\S'],
      placeHolderCharacter: '0',
      showMaskTyped: true,
      dropSpecialCharacters: false,
      leadZeroDateTime: true,
    },
  };

  ngOnInit() {
    this.form.valueChanges.subscribe(() => console.log(this.form));
  }
}

bootstrapApplication(App);
