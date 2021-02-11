import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footerMessage: string = 'Histogram Coding Exercise';
  date: Date = new Date();
  year: string = this.date.getFullYear().toString();
}
