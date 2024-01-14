import { Component } from '@angular/core';
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';

@Component({
  selector: 'app-fasttrack',
  templateUrl: './fasttrack.component.html',
  styleUrls: ['./fasttrack.component.scss']
})
export class FasttrackComponent {
  darkTheme: NgxMaterialTimepickerTheme = {
    container: {
        bodyBackgroundColor: '#424242',
        buttonColor: '#fff'
    },
    dial: {
        dialBackgroundColor: '#555',
    },
    clockFace: {
        clockFaceBackgroundColor: '#555',
        clockHandColor: '#9fbd90',
        clockFaceTimeInactiveColor: '#fff'
    }
};
passengers: number = 1;

incrementPassengers() {
  this.passengers++;
  this.caculateTotalPrice();
}

decrementPassengers() {
  if (this.passengers > 1) {
    this.passengers--;
    this.caculateTotalPrice();
  }
}
//xu li gia
basePrice: number = 60;
totalPrice: number = this.basePrice;

caculateTotalPrice(){
  this.totalPrice = this.basePrice * this.passengers;
}



bookNow() {
  // Thực hiện các hành động khi nhấn nút Book Now, ví dụ: gửi dữ liệu đặt vé đến máy chủ, xử lý đặt vé, vv.
  alert('Đặt vé thành công!');
}
}
