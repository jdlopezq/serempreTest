import { ShareDataService } from './../../services/share-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  warranty ;
  features;
  price = 295.55
  constructor(private _shareData: ShareDataService) {}

  ngOnInit(): void {
    this._shareData.getFeatures().subscribe((data) => (this.features = data));
    this._shareData.getWarranty().subscribe((data) => (this.warranty = data));
    this._shareData.getFinished().subscribe();
  }
}
