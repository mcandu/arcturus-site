import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill-table-img',
  templateUrl: './skill-table-img.component.html',
  styleUrls: ['./skill-table-img.component.css']
})
export class SkillTableImgComponent implements OnInit {

  @Input() tableImage: string;

  constructor() { }

  ngOnInit() {
  }

}
