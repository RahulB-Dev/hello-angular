import { Component } from '@angular/core';
import { QuoteService } from '../../service/quote.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
quote: string = '';
constructor(private quoteService: QuoteService) {
  this.quote = this.quoteService.getQuote();
}
}
