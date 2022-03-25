import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CustomButtonComponent implements OnInit {
  constructor() {
    console.log('initialised button');
  }

  @Input() value!: string;
  @Input() desc: string = '';

  @Output() touched: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {}

  onClick() {
    this.touched.emit('Touched from Custom Button 1');
  }
}
