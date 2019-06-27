import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  @Input() type: boolean;
  @Input() servicesImg: string;
  @Input() title: string;
  @Input() description: string;
  @Input() button: string;
  @Input() link: string;

  constructor() { }

  ngOnInit() {
  }

}
