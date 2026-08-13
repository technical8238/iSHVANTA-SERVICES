import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.html',
  styleUrls: ['./services.css']
})
export class ServicesPage {
  callNow(): void {
    window.location.href = 'tel:+918849701206';
  }

  whatsappNow(): void {
    window.open('https://wa.me/918849701206', '_blank');
  }
}
