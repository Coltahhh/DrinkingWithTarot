import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import rollADie from "roll-a-die";

@Component({
	selector: 'app-dice-roller',
	templateUrl: './dice-roller.component.html',
	styleUrls: ['./dice-roller.component.scss']
})
export class DiceRollerComponent implements AfterViewInit {

	@ViewChild('diceRoller') diceRoller!: ElementRef;

	lastValue = 0

	rollDice() {

		const options = {
			element: this.diceRoller.nativeElement as HTMLElement,
			numberOfDice: 1,
			callback: (diceValues: any) => {
				this.lastValue = diceValues[0]
			}
		}

		rollADie(options)
	}

	ngAfterViewInit() {
		this.rollDice()
	}
}
