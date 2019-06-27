import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-softbox-img',
  templateUrl: './softbox-img.component.html',
  styleUrls: ['./softbox-img.component.css']
})
export class SoftboxImgComponent implements OnInit {

  @Input() softImg: string;

  constructor() { }

  ngOnInit() {
  }

}
