import { Component, OnInit } from '@angular/core';
import { faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;
  title = 'My Portfolio';
  
  constructor() {}

  ngOnInit(): void {
    
  }
}
