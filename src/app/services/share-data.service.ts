import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShareDataService {
  private warranty = new BehaviorSubject(null);
  private features = new BehaviorSubject(null);
  private finished = new BehaviorSubject(null);

  addWarranty(e) {
    this.warranty.next(e);
  }
  addFeatures(e) {
    this.features.next(e);
  }
  addFinished(e) {
    this.finished.next(e);
  }

  getWarranty(): Observable<any> {
    return this.warranty.asObservable();
  }
  getFinished(): Observable<any> {
    return this.finished.asObservable();
  }
  getFeatures(): Observable<any> {
    return this.features.asObservable();
  }
}
