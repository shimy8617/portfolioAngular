import { Component } from '@angular/core';
import { faQuoteLeft, faQuoteRight, faPen } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  faQuoteLeft =  faQuoteLeft;
  faQuoteRight = faQuoteRight;
  faPen = faPen;

}
