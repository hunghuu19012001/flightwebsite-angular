import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
interface Airport {
  name: string;
  city: string;
  country: string;
  iata_code: string;
  _geoloc: {
    lat: number;
    lng: number;
  };
  links_count: number;
  objectID: string;
}
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

  isDepartureDropdownVisible  = false;
  isArrivalDropdownVisible =false
  selectedDeparture: string = '';
  selectedArrival: string = '';
  departureLocations: Airport[] = []; //khởi tạo mảng để chưa dữ liệu sân bay
  arriveLocations: Airport[] = [];
  filteredDepartureLocations: Airport[] = []; 
  filteredArrivalLocations: Airport[] = []; 
constructor(private dataService: DataService){}

ngOnInit() {
  //Gọi service để tải tài liệu json khi component được khởi tạo
  this.dataService.getJsonData().subscribe(data => {
    this.departureLocations = data;
  });
  this.dataService.getJsonData().subscribe(data => {
    this.arriveLocations = data;
  });
}

onDepartureInputChange(event: any) {
  const inputValue = event?.target?.value || '';
  this.filteredDepartureLocations = this.departureLocations.filter(
    location => location.name.toLowerCase().includes(inputValue.toLowerCase())
  ).slice(0, 4);

  // Hiển thị dropdown chỉ khi có địa điểm được lọc
  this.isDepartureDropdownVisible = !!inputValue && this.filteredDepartureLocations.length > 0;
}
onArrivalInputChange(event: any) {
  const inputValue = event?.target?.value || '';
  this.filteredArrivalLocations = this.arriveLocations.filter(
    location => location.name.toLowerCase().includes(inputValue.toLowerCase())
  ).slice(0, 4);

  // Hiển thị dropdown chỉ khi có địa điểm được lọc
  this.isArrivalDropdownVisible = !!inputValue && this.filteredArrivalLocations.length > 0;
}
  toggleDropdown(){
    this.isDepartureDropdownVisible =!this.isDepartureDropdownVisible;
  }
  submitLocation(){
    console.log('Selected location: ', this.selectedDeparture);
  }
  selectDepartureLocation(location: Airport) {
    this.selectedDeparture = location.name;
    this.isDepartureDropdownVisible = false;

    //thay doi phuong thuc selectDepartureLocation  de xu ly Multi city
    if(this.selectedTripType === 'multiCity'){
      this.selectMultiCityLocation(location);
    }
  }
  selectArrivalLocation(location: Airport) {
    this.selectedArrival = location.name;
    this.isArrivalDropdownVisible = false;


  }

  departureDate: string = ''; // Biến để lưu trữ ngày đi

  // Logic xử lý ngày đi
  onDepartureDateChange(event: any): void {
    // Lấy giá trị ngày mới từ event
    const newDepartureDate: string = event.target.value;

    // Thực hiện các xử lý bạn muốn khi ngày đi thay đổi
    console.log(`Ngày đi đã thay đổi thành: ${newDepartureDate}`);
    // Gọi các hàm xử lý khác nếu cần

    // Cập nhật biến departureDate
    this.departureDate = newDepartureDate;
    
  }
    returnDate: string | null = null; // Biến để lưu trữ ngày về

    // Logic xử lý ngày đi
    onReturnDateChange(event: any): void {
      // Lấy giá trị ngày mới từ event
      const newReturnDate: string = event.target.value;
  
      // Thực hiện các xử lý bạn muốn khi ngày về thay đổi
      console.log(`Ngày về đã thay đổi thành: ${newReturnDate}`);
      // Gọi các hàm xử lý khác nếu cần
  
      // Cập nhật biến departureDate
      this.returnDate = newReturnDate;
  }
  ///xử lí one way
  selectedTripType: string = 'roundTrip'; // giá trị mặc định là round trip
  selectTripType(TripType: string){
      this.selectedTripType = TripType;

      if(TripType === 'oneWay'){
        this.returnDate = null;
      }
  }
/////passenger
  passengerOptions = [
    { label: 'Adult (12+)', quantity: 0 },
    { label: 'Children (2-11)', quantity: 0 },
    { label: 'Infants (0-2)', quantity: 0 },
    { label: 'Infants (under 2)', quantity: 0 }
];

decreaseQuantity(option: any): void {
    if (option.quantity > 0) {
        option.quantity--;
    }
}

increaseQuantity(option: any): void {
    option.quantity++;
}
isPassengerDropdownVisible: boolean = false;

togglePassengerDropdown(): void {
    this.isPassengerDropdownVisible = !this.isPassengerDropdownVisible;
}
getTotalPassengers(): number{
  return this.passengerOptions.reduce((total, option) => total + option.quantity, 0);
}
recordPassengerInfo(): void{
  this.isPassengerDropdownVisible = false;
}

isCabinDropdownVisible: boolean = false;
selectedCabin: string = ''; // bieens luu tru ghe da chon

toggleCabinDropdown(): void{
  this.isCabinDropdownVisible = !this.isPassengerDropdownVisible;
}
selectCabin(cabin: string): void{
  this.selectedCabin = cabin;
  this.isCabinDropdownVisible = false;
}

///xu li muti city
selectedCities: string[]=[]; // luu tru danh sach diem den
selectMultiCityLocation(location: Airport){
  const locationString = `${location.name} - ${location.city}, ${location.country}`;

  //kiem tra xem diem den da duoc them vao danh sach chua
  if(!this.selectedCities.includes(locationString)){
    this.selectedCities.push(locationString);
  }
}
removeCity(city: string){
  this.selectedCities = this.selectedCities.filter(c => c !== city)
}


  
}
