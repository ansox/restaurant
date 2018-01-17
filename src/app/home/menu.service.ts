import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class MenuService {
  private baseUrl = 'http://localhost:3000'

  constructor(private httpClient: HttpClient) { }

  getMenu(): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/menu`)
      .toPromise();
  }

  getMenuItem(id: string): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/menu/${id}`)
      .toPromise();
  }
}