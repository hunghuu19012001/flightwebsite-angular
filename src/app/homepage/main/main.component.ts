import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  ngOnInit() {}

  //slide products
 
  slide1 = [
    {img: 'assets/images/rectangle/hanoi.jpg', description: 'HÀ NỘI'},
    {img: 'assets/images/rectangle/saigon.jpg', description: 'SÀI GÒN'},
    {img: 'assets/images/rectangle/dalat.jpg', description: 'ĐÀ LẠT'},
    {img: 'assets/images/rectangle/halong.jpg', description: 'HẠ LONG'},
    {img: 'assets/images/rectangle/phuquoc.jpg', description: 'PHÚ QUỐC'},
    {img: 'assets/images/rectangle/binhdinh.jpg', description:'BÌNH ĐỊNH'},
    {img: 'assets/images/rectangle/sapa.jpg', description:'SA PA'},


  ]


  slide1Config = { slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  
  };
  slide2Config = { slidesToShow: 2,
    slidesToScroll: 2,
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
