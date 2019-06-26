import { AfterViewInit, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { delay } from 'rxjs/operators';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.css']
})
export class TabContainerComponent implements AfterViewInit {

  @Input() activeIndex: number = 0;

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>

  ngAfterViewInit(): void {

    this.tabs.changes.pipe(delay(50)).subscribe(() => {
      this.tabs.forEach((tab, index) => {
        tab._index = index;
        tab._isActive = index == this.activeIndex;
      })
    });
    this.tabs.notifyOnChanges();
  }

}
