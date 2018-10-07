import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'app';
  @ViewChild('f')
  f: NgForm;

  card = {
    number : '',
    name: '',
    expiry: '',
    cvc: ''
  };
  card_number = [];
  card_number_str;
  card_name = '';
  card_expiry = [];
  card_expiry_str;
  card_cvv = '';
  flip = 'inactive';
  cardNumber;
  cardName;
  cardExpiry;
  cardCVV;

  ngOnInit() {
    // Create Card
    this.createCard();

  }

  createCard() {
    for (let i = 1; i <= 19; i++) {
      if (i % 5 === 0) {
        this.card_number.push(' ');
      } else {
        this.card_number.push('•');
      }
    }
    this.card_number_str = this.card_number.join('');

    this.card_name = 'YOUR NAME HERE';

    for (let i = 0; i <= 4; i ++) {
      if (i === 2) {
        this.card_expiry.push('/');
      } else {
        this.card_expiry.push('•');
      }
    }
    this.card_expiry_str = this.card_expiry.join('');
  }

  addToCardNumber(e) {
    const number = [];
    if (!!e) {
      number.push(e.split(''));
    if (!!e) {

    }
    this.card_number = [];

    for (let i = 0; i < 16; i++) {
      if (i > number[0].length - 1) {
        this.card_number[i] = '•';
      } else if (i % 4 === 0) {
        this.card_number[i] = '  ' + number[0][i];
      } else {
        this.card_number[i] = number[0][i];
      }
    }
    this.card_number = this.card_number.splice(0);
    this.card_number_str = this.card_number.join('');

    }
  }

  addToCardName(e) {
    if (!e) {
      this.card_name = 'YOUR NAME HERE';
    } else {
      this.card_name = e;
    }
  }

  addToCardExpiry(e) {
    if (!!e) {
      const expiry = [];
      expiry.push(e.split(''));
      this.card_expiry = [];

    for (let i = 0; i < 4; i++) {
      if (i > expiry[0].length - 1 ) {
        this.card_expiry[i] = '•';
      } else if (i === 2) {
        this.card_expiry[i] = '/' + expiry[0][i];
      } else {
        this.card_expiry[i] = expiry[0][i];
      }
    }
    this.card_expiry = this.card_expiry.splice(0);
    this.card_expiry_str = this.card_expiry.join('');
    }

  }

  showBack() {
    this.flip = 'active';
  }
  showFront() {
    this.flip = 'inactive';
  }

  onSubmit(myForm: NgForm) {
    this.cardName = this.card_name;
    this.cardNumber = this.card_number_str;
    this.cardExpiry = this. card_expiry_str;
    this.cardCVV = this.card.cvc;

    // Reset Form
    myForm.resetForm();
  }
}
