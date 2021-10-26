import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private httpLink = 'https://frontend-interview-api.vercel.app/api/items';
  constructor(private httpClient: HttpClient) {}

  getProductInfo() {
    const headers = new HttpHeaders()
      headers.append('content-type', 'application/json')
      headers.append('Access-Control-Allow-Origin', '*');

    return this.httpClient.get(`${this.httpLink}`, { headers }).pipe(
      map((response: Response) => {
        return response;
      })
    );
  }
}
