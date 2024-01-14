import { Component } from '@angular/core';

@Component({
  selector: 'app-content-bottom',
  templateUrl: './content-bottom.component.html',
  styleUrls: ['./content-bottom.component.scss']
})
export class ContentBottomComponent {
  slide2 = [
    {img: 'assets/images/rectangle/slide-halong/1.jpg'},
    {img: 'assets/images/rectangle/slide-halong/2.jpg'},
    {img: 'assets/images/rectangle/slide-halong/3.jpg'},
    {img: 'assets/images/rectangle/slide-halong/4.jpg'},
  ]

  slide2Config = { slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  
  }

  slickInit(e: any) {
    console.log('slick initialized');
  }
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  afterChange(e: any) {
    console.log('afterChange');
  }
  beforeChange(e: any) {
    console.log('beforeChange');
  }
  constructor() {}
}


