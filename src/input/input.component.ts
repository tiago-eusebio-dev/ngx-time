import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IMaskConfig } from '../entities/mask-config.interface';
import { MaskDirective } from '../directives/mask.directive';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  standalone: true,
  imports: [MaskDirective],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() maskConfig: IMaskConfig;

  @Input() set value(value: string) {
    this._value = value;
    this.changeDetection.detectChanges();
  }
  get value(): string {
    return this._value;
  }

  @Output() valueChange: EventEmitter<string> = new EventEmitter();
  @ViewChild(MaskDirective) maskDirective: MaskDirective;

  private _value!: string;
  onChanged: (value: string) => void;
  onTouched: () => void;

  constructor(private changeDetection: ChangeDetectorRef) {}

  ngOnInit() {}

  registerOnChange(fn: (value: string) => void): void {
    this.onChanged = fn;
    this.maskDirective.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
    this.maskDirective.onTouch = fn;
  }

  writeValue(value: string): void {
    console.log(this.maskDirective);
    this.maskDirective?.writeValue?.(value);
    this.value = value;
  }

  protected modelChange(value: string): void {
    this.maskDirective?.onChange?.(value);
    this.maskDirective?.onTouch?.();
  }
}
