import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit{
  items: any[] = [
    { image: 'assets/images/rectangle/slide-place/binhdinh.jpg', name: 'Bình Định', description: 'Với bờ biển dịu dàng, cuộc sống ven biển tươi mới và nhiều di tích lịch sử, Bình Định hấp dẫn du khách bằng vẻ đẹp tự nhiên và văn hóa độc đáo' },
    { image: 'assets/images/rectangle/slide-place/hoian.jpg', name: 'Hội An', description: 'Một thành phố cổ cực kỳ lãng mạn với kiến trúc độc đáo, Hội An là nơi du khách có thể bắt gặp không khí truyền thống Việt Nam trong từng góc phố, từ những ngôi nhà cổ đến những đèn lồng lung linh.' },
    { image: 'assets/images/rectangle/slide-place/hagiang.jpg', name: 'Hà Giang', description: 'Nằm ở cực bắc Việt Nam, Hà Giang quyến rũ với những cung đường đèo hùng vĩ, những cánh đồng lúa bậc thang và văn hóa đặc sắc của các dân tộc thiểu số, tạo nên một trải nghiệm du lịch độc đáo.' },
    { image: 'assets/images/rectangle/slide-place/halong.jpg', name: 'Hạ Long', description: 'Với vịnh Hạ Long được UNESCO công nhận là Di sản Thiên nhiên thế giới, những hòn đảo đá kỳ bí, và du thuyền sang trọng, Hạ Long thu hút du khách bởi vẻ đẹp huyền bí và độc đáo của nó.' },
    { image: 'assets/images/rectangle/slide-place/danang.jpg', name: 'Đà Nẵng', description: 'Thành phố này tự hào với cảnh đẹp hài hòa giữa biển xanh, núi non và thành phố hiện đại; Đà Nẵng là điểm đến lý tưởng cho những người muốn trải nghiệm sự kết hợp tuyệt vời giữa lịch sử và hiện đại.' },
    { image: 'assets/images/rectangle/slide-place/ninhbinh.jpg', name: 'Ninh Bình', description: ' Với cảnh đẹp hùng vĩ của vùng quê Bắc Bộ, Ninh Bình có những cánh đồng lúa non mướt mát, những ngọn núi đá kỳ vĩ, và sông Ngo Dong nổi tiếng với thác Đáy là điểm đến lý tưởng cho những người yêu thiên nhiên và lịch sử.' },

  ];

  constructor() { }

  ngOnInit() {
  }

  nextSlide() {
    this.items.push(this.items.shift());
  }

  prevSlide() {
    this.items.unshift(this.items.pop());
  }
}
