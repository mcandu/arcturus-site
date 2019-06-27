import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-agency-card',
  templateUrl: './agency-card.component.html',
  styleUrls: ['./agency-card.component.css']
})
export class AgencyCardComponent implements OnInit {

  @Input() cardImg: string;
  @Input() title: string;
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
