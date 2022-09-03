import {Component} from '@angular/core';
import {Card, CardService} from "../card.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

	currentCard: Card = this.cardService.cards[0]

	constructor(private cardService: CardService) {}

	nextCard() {

		let nextCard = this.currentCard

		while (nextCard.name === this.currentCard.name) {
			nextCard = this.cardService.cards[Math.floor(Math.random() * this.cardService.cards.length)]
		}

		this.currentCard = nextCard
	}
}
