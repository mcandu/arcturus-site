import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-slider-item',
  templateUrl: './card-slider-item.component.html',
  styleUrls: ['./card-slider-item.component.css']
})
export class CardSliderItemComponent implements OnInit {

  @Input() name: String;
  @Input() description: String;
  @Input() thumbnail: String;
  @Input() position: String;

  constructor() { }

  ngOnInit() {
  }

}
