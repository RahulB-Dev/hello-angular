import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl ='https://jsonplaceholder.typicode.com/users'
  constructor(private http: HttpClient) {}

  addContact(data: any): Observable<any> {
    return this.http.post (this.apiUrl, data);
  }
  getContacts(): Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }
}
