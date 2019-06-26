import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
  host: {
    'class': 'tab-pane fade'
  }
})
export class TabComponent {
  @HostBinding('attr.id') _index: number;

  @HostBinding('class.active')
  @HostBinding('class.show') _isActive = false;


  @Input() title: string;
  @Input() icon: string;

}
