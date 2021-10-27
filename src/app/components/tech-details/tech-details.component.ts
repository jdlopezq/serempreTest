import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';

@Component({
  selector: 'app-tech-details',
  templateUrl: './tech-details.component.html',
  styleUrls: ['./tech-details.component.css']
})
export class TechDetailsComponent implements OnInit {
  specsKeys=[];
  specs= {
    dimension: "76.8 x 43.8 x 34.7 mm (earbuds and charging case)",
    usb_standard: "USB-C",
    power_suply: "Sennheiser 7 mm dynamic driver",
    frequency_response_microphone: "100 Hz to 10 kHz",
    frequency_response: "5 - 21,000 Hz",
    noise_cancelation: "Single-Mic ANC per eardbud sides"
    }
  constructor() { }

  ngOnInit(): void {
this.specsKeys= Object.keys(this.specs)
  }

}
