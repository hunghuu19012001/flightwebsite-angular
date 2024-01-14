import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  private isDropdownVisibleSubject = new BehaviorSubject<boolean>(false);
  isDropdownVisible$ = this.isDropdownVisibleSubject.asObservable();

  setDropdownVisible(isVisible: boolean) {
    this.isDropdownVisibleSubject.next(isVisible);
  }
}
