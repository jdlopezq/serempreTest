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
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
})
export class FeaturesComponent implements OnInit {
  @ViewChild(MatButtonToggleGroup) group: MatButtonToggleGroup;
  @ViewChildren(MatButtonToggle) toggles: QueryList<MatButtonToggle>;
  ngAfterViewInit() {
    setTimeout(() => {
      this.toggles.forEach((toggle) => (toggle.buttonToggleGroup = this.group));
    });
  }
  @Output() choosenFeature = new EventEmitter<string>();
  features = [
    {
      id: 1,
      name: 'Voice Assistant support',
      additionalValue: 0,
    },
    {
      id: 2,
      name: 'Customizable controls',
      additionalValue: 25,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  setFeature(e: MatButtonToggleChange) {
    this.choosenFeature.emit(e.value);
  }
}
