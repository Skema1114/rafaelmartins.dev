import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private isFlippedBHS = new BehaviorSubject<boolean>(false);
  private isMobileBHS = new BehaviorSubject<boolean>(false);
  private isProjectScrnBHS = new BehaviorSubject<boolean>(false);
  isFlipped$: Observable<boolean> = this.isFlippedBHS.asObservable();
  isMobile$: Observable<boolean> = this.isMobileBHS.asObservable();
  isProjectScrn$: Observable<boolean> = this.isProjectScrnBHS.asObservable();

  setFlippedCard(value: boolean) {
    this.isFlippedBHS.next(value);
  }

  setMobile(value: boolean) {
    this.isMobileBHS.next(value);
  }

  setProjectScrn(value: boolean) {
    this.isProjectScrnBHS.next(value);
  }
}
