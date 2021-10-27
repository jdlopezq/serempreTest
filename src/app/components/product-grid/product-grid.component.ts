import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css'],
})
export class ProductGridComponent implements OnInit {
  breakpoint: number;
  initialImg: string;
  productPictures = [
    {
      text: 'Two',
      cols: 1,
      rows: 1,
      img: 'https://static-serempre.s3.amazonaws.com/images-product/Case_black_Sennheiser.png',
    },
    {
      text: 'Three',
      cols: 1,
      rows: 1,
      img: 'https://static-serempre.s3.amazonaws.com/images-product/big-MOMENTUM-TRUEWIRELESS2.png',
    },
    {
      text: 'Four',
      cols: 1,
      rows: 1,
      img: 'https://static-serempre.s3.amazonaws.com/images-product/10.15.55.png',
    },
  ];

  featuresArray = [
    { text: 'Customizable Touch controls', cols: 1, rows: 1, img: "https://static-serempre.s3.amazonaws.com/images-product/touch.png", },
    { text: 'Built-in Equalizer', cols: 1, rows: 1, img: "https://static-serempre.s3.amazonaws.com/images-product/equalizer.png" },
    { text: 'Active Noise Cancellation', cols: 1, rows: 1, img: "https://static-serempre.s3.amazonaws.com/images-product/noise_cancelattion.png" },
  ];
  constructor() {}

  ngOnInit(): void {
    this.breakpoint = window.innerWidth <= 400 ? 1 : 3;
    this.initialImg= this.productPictures[0].img
  }

  onResize(event) {
    this.breakpoint = event.target.innerWidth <= 400 ? 1 : 3;
  }
  changeImg(event) {
    this.initialImg = event.value;
  }
}
