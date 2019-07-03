import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-workspace-card',
  templateUrl: './workspace-card.component.html',
  styleUrls: ['./workspace-card.component.css']
})
export class WorkspaceCardComponent implements OnInit {

  @Input() cardImage: string;
  @Input() title: string;
  @Input() description: string;
  @Input() link: string;

  constructor() { }

  ngOnInit() {
  }

}
