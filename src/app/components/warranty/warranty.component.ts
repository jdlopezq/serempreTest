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
  selector: 'app-warranty',
  templateUrl: './warranty.component.html',
  styleUrls: ['./warranty.component.css'],
})
export class WarrantyComponent implements OnInit {
  @ViewChild(MatButtonToggleGroup) group: MatButtonToggleGroup;
  @ViewChildren(MatButtonToggle) toggles: QueryList<MatButtonToggle>;
  ngAfterViewInit() {
    setTimeout(() => {
      this.toggles.forEach((toggle) => (toggle.buttonToggleGroup = this.group));
    });
  }
  @Output() choosenWarranty = new EventEmitter<string>();
  warranty = [
    {
      id: 1,
      name: '2 years coverage',
      description: 'For the past 75 years, Sennheiser has put sound first',
      additionalValue: 0,
    },
    {
      id: 2,
      name: '3 years coverage',
      description: 'For the past 75 years, Sennheiser has put sound first',
      additionalValue: 75,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  setWarranty(e: MatButtonToggleChange) {
    this.choosenWarranty.emit(e.value);
  }
}
