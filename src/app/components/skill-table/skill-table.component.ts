import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill-table',
  templateUrl: './skill-table.component.html',
  styleUrls: ['./skill-table.component.css']
})
export class SkillTableComponent implements OnInit {

  @Input() title: String;
  @Input() progress: Number = 0;

  constructor() { }

  ngOnInit() {
  }

}
