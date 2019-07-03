import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() icon: string;
  

  constructor() { }

  ngOnInit() {
  }

}
