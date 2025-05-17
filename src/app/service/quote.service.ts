import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  getQuote(): string {
    return 'The best way to learn angular is to build something awesome!';
   }
}
