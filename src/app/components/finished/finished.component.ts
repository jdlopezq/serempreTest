import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import {
  MatButtonToggle,
  MatButtonToggleChange,
  MatButtonToggleGroup,
} from '@angular/material/button-toggle';

@Component({
  selector: 'app-finished',
  templateUrl: './finished.component.html',
  styleUrls: ['./finished.component.css'],
})
export class FinishedComponent implements OnInit {
  @ViewChild(MatButtonToggleGroup) group: MatButtonToggleGroup;
  @ViewChildren(MatButtonToggle) toggles: QueryList<MatButtonToggle>;
  ngAfterViewInit() {
    setTimeout(() => {
      this.toggles.forEach((toggle) => (toggle.buttonToggleGroup = this.group));
    });
  }
  @Output() choosenFinished = new EventEmitter<string>();
  colors = [
    {
      id: 1,
      name: 'Ivory white',
      description:
        'For the past 75 years, Sennheiser has put sound first. The new MOMENTUM True.',
    },
    {
      id: 2,
      name: 'Mattle Black',
      description:
        'Of all the celestial bodies that capture our attention and fascination as astronomers',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  setFinished(e: MatButtonToggleChange) {
    this.choosenFinished.emit(e.value);
  }
}
