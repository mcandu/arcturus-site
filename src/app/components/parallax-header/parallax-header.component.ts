import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parallax-header',
  templateUrl: './parallax-header.component.html',
  styleUrls: ['./parallax-header.component.css']
})
export class ParallaxHeaderComponent implements OnInit {

  @Input() header1: string;
  @Input() header2: string;
  @Input() button1: string;
  @Input() button2: string;

  constructor() { }

  ngOnInit() {
  }

}
