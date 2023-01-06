import { Component } from '@angular/core';
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  faPen = faPen;
  faTimes=faTimes;

}
