import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  @ViewChild(MatButtonToggleGroup) group: MatButtonToggleGroup;
  @ViewChildren(MatButtonToggle) toggles: QueryList<MatButtonToggle>;
  ngAfterViewInit() {
    setTimeout(() => {
      this.toggles.forEach(toggle => toggle.buttonToggleGroup = this.group);
    });
  }
  constructor() { }

  ngOnInit(): void {
  }

}
