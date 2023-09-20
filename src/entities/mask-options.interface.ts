import { EventEmitter } from '@angular/core';

export interface IMaskOptions {
  suffix?: string;
  prefix?: string;
  thousandSeparator?: string;
  decimalMarker?: '.' | ',' | ['.', ','];
  clearIfNotMatch?: boolean;
  showTemplate?: boolean;
  showMaskTyped?: boolean;
  placeHolderCharacter?: string;
  shownMaskExpression?: string;
  dropSpecialCharacters?: boolean | string[];
  specialCharacters?: string[];
  hiddenInput?: boolean | undefined;
  validation?: boolean;
  separatorLimit?: string;
  allowNegativeNumbers?: boolean;
  leadZeroDateTime?: boolean;
  triggerOnMaskChange?: boolean;
  maskFilled?: EventEmitter<void>;
  patterns?: {
    [character: string]: {
      pattern: RegExp;
      optional?: boolean;
      symbol?: string;
    };
  };
}
