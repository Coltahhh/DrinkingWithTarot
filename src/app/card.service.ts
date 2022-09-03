import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

	cards: Card[] = [
		{
			name: "The Fool",
			image: "https://cdn.discordapp.com/attachments/751981148875390997/1014396714549002311/TheFool.jpg",
			description: "You lose your turn"
		}, {
			name: "The World",
			image: "https://cdn.discordapp.com/attachments/751981148875390997/1014396723285741600/TheWorld.jpg",
			description: "Skip your opponents turn and draw 2 cards"
		}, {
			name: "The Moon",
			image: "https://cdn.discordapp.com/attachments/751981148875390997/1014397563161555004/TheMoon.jpg",
			description: "Remove 1 shot unless you have 0"
		}, {
			name: "The Sun",
			image: "https://cdn.discordapp.com/attachments/751981148875390997/1014397587538853938/TheSun.jpg",
			description: "Add 2 shots"
		}, {
			name: "Judgement",
			image: "https://cdn.discordapp.com/attachments/751981148875390997/1014397648628891708/Judgement.jpg",
			description: "If you stole a shot at any point of the game, you lose all of your shots. If you didn’t steal, you will be awarded 1 shot"
		}, {
			name: "The Star",
			image: "https://cdn.discordapp.com/attachments/751981148875390997/1014397505540198400/TheStar.jpg",
			description: "If you draw this card at any point in the game you can save yourself if you reach over 5 shots by resetting back to 4 shots"
		}, {
			name: "The Wheel Of Fortune",
			image: "https://cdn.discordapp.com/attachments/751981148875390997/1014397223062216755/WheelofFortune.jpg",
			description: "Roll the die. If its even you get 2 shots, odd you lose 1 shot, matching pair you get 3 shots"
		}, {
			name: "The Hanged Man",
			image: "https://cdn.discordapp.com/attachments/751981148875390997/1014397286429765642/TheHangedMan.jpg",
			description: "Reset to 0 shots"
		}, {
			name: "Death",
			image: "https://cdn.discordapp.com/attachments/751981148875390997/1014397326082707537/Death.jpg",
			description: "Death – Add 4 shots"
		}, {
			name: "Temperance",
			image: "https://cdn.discordapp.com/attachments/751981148875390997/1014397356483026944/Temperance.jpg",
			description: "Add 1 shot"
		}, {
			name: "The Devil",
			image: "https://cdn.discordapp.com/attachments/751981148875390997/1014397438649454612/TheDevil.jpg",
			description: "Shot of water L"
		}, {
			name: "The Tower",
			image: "https://cdn.discordapp.com/attachments/751981148875390997/1014397471851548724/TheTower.jpg",
			description: "Add 1 shot"
		}, {
			name: "The Magician",
			image: "https://cdn.discordapp.com/attachments/751981148875390997/1014396765744676904/TheMagician.jpg",
			description: "Adds barrier that prevents opponent from stealing shots or causing harm. Barrier lasts for 3 turns"
		}, {
			name: "The High Priestess",
			image: "https://cdn.discordapp.com/attachments/751981148875390997/1014396795889139712/TheHighPriestess.jpg",
			description: "Steal 1 shot from your opponent"
		}, {
			name: "The Empress",
			image: "https://cdn.discordapp.com/attachments/751981148875390997/1014396877954883594/TheEmpress.jpg",
			description: "Gift 2 of your shots to your opponent. "
		}, {
			name: "The Emperor",
			image: "https://cdn.discordapp.com/attachments/751981148875390997/1014396922473222154/TheEmperor.jpg",
			description: "Take 2 shots from opponent, but it does not add to your shot count"
		}, {
			name: "The Hierophant",
			image: "https://cdn.discordapp.com/attachments/751981148875390997/1014396960226148412/TheHierophant.jpg",
			description: "Add 1 shot"
		}, {
			name: "The Lovers",
			image: "https://cdn.discordapp.com/attachments/751981148875390997/1014397001590374451/TheLovers.jpg",
			description: "Swap shots with your opponent"
		}, {
			name: "Justice",
			image: "https://cdn.discordapp.com/attachments/751981148875390997/1014397037959188501/Justice.jpg",
			description: "If your opponent stole a shot, you get to steal your shot back, as well as add another shot. (if a shot was not stolen, just add 1)"
		}, {
			name: "The Chariot",
			image: "https://cdn.discordapp.com/attachments/751981148875390997/1014397104489242664/TheChariot.jpg",
			description: "Steal 1-3 shots from your opponent (players choice)"
		}, {
			name: "Strength",
			image: "https://cdn.discordapp.com/attachments/751981148875390997/1014397128682000404/Strength.jpg",
			description: "Add 1 shot"
		}, {
			name: "The Hermit",
			image: "https://cdn.discordapp.com/attachments/751981148875390997/1014397175159078912/TheHermit.jpg",
			description: "You have the option to accept or decline your next card"
		},
	]
}


export type Card = {
	name: String,
	image: String,
	description: String,
}

