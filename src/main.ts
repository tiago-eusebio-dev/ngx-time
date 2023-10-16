import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { IMaskConfig } from './entities/mask-config.interface';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [ReactiveFormsModule, NgxMaskDirective],
  providers: [provideNgxMask()],
  templateUrl: './main.html',
})
export class App implements OnInit {
  private mask = '00D : 00H : 00M : 00S';

  form = new FormGroup({
    ngxMaskInputTest: new FormControl<string>('01:02:03:04'),
  });

  protected maskConfig: IMaskConfig = {
    mask: this.mask,
    options: {
      shownMaskExpression: this.mask,
      placeHolderCharacter: '',
      showMaskTyped: true,
      dropSpecialCharacters: false,
      leadZeroDateTime: true,
      // The defaut specialCharacters + custom
      specialCharacters: [
        '-',
        '/',
        '(',
        ')',
        '.',
        ':',
        ' ',
        '+',
        ',',
        '@',
        '[',
        ']',
        '"',
        "'",
        'D', // custom
        'H', // custom
        'M', // custom
        '\\S', // custom
      ],
      // The default patterns + custom
      patterns: {
        '0': { pattern: /\d/ },
        '9': { pattern: /\d/, optional: true },
        A: { pattern: /[a-zA-Z0-9]/ },
        L: { pattern: /[a-z]/ },
        S: { pattern: /[a-zA-Z]/ },
        U: { pattern: /[A-Z]/ },
        X: { pattern: /\d/, symbol: '*' },
        d: { pattern: /\d/ },
        h: { pattern: /\d/ },
        m: { pattern: /\d/ },
        s: { pattern: /\d/ },
        D: { pattern: /D/ }, // custom: The D on the mask can only be the D character
        H: { pattern: /H/ }, // custom: the H on the mask can only be the H character
        M: { pattern: /M/ }, // custom: the M on the mask can only be the M character
        '\\S': { pattern: /\S/ }, // custom: the S on the mask can only be the S character. Escape it to prevent digits from being removed from the value
      },
    },
  };

  ngOnInit() {
    this.form.valueChanges.subscribe(() => console.log(this.form));
  }
}

bootstrapApplication(App);
