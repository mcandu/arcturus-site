import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component {
  @Input() style: string = 'style1';
  @Input() alignment: string = 'left';
  @Input() class: string;
  @Input() active: boolean = false;

  @Input() title: string;
  @Input() price: string;
  @Input() checks: string[];
  @Input() icon: string;
  @Input() link: string;


  @HostBinding('attr.class')
  get _class() {
    return `pricingtable-wrapper ${this.style} ${this.alignment} ${this.class} ${this.active && 'active'}`;
  }

}
