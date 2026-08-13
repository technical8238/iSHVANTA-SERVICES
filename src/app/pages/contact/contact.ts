import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactPage {
  callNow(): void {
    window.location.href = 'tel:+918849701206';
  }

  whatsappNow(): void {
    window.open('https://wa.me/918849701206', '_blank');
  }
}
