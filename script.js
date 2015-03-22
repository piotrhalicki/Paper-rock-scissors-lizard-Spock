var userChoice = prompt("Twój wybór to: kamień, papier, nożyczki, Spock czy jaszczurka? :)");

var computerChoice = Math.random();

if (computerChoice <= 0.20) {
computerChoice = "kamień";
} 
	else if(computerChoice <= 0.40) {
	computerChoice = "papier";
	} 
		else if(computerChoice <= 0.60) {
		computerChoice = "nożyczki";
		} 
			else if(computerChoice <= 0.80) {
			computerChoice = "Spock";
			} 
				else {
				computerChoice = "jaszczurka";
				}

alert("Komputer wybrał: " + computerChoice);

var compare = function(choice1, choice2){
if (choice1.toLowerCase() === choice2.toLowerCase()) {
	return "Mamy remis!";
}

	else if (choice1 === "kamień") {			//kamien
		if (choice2 === "nożyczki") {
			return "Kamień tępi nożyczki i wygrywa!";
		}
			else if (choice2 === "Spock") {
				return "Spock dezintegruje kamień i wygrywa!";
			}
				else if (choice2 === "jaszczurka") {
					return "Kamień zgniata jaszczurkę i wygrywa!";
				}
					else {
						return "Papier zakrywa kamień i wygrywa!";
					}
	}

	else if (choice1 === "papier") {			//papier
		if (choice2 === "kamień") {
			return "Papier zakrywa kamień i wygrywa!";
		}
			else if (choice2 === "Spock") {
				return "Papier obala Spocka i wygrywa!";
			}
				else if (choice2 === "jaszczurka") {
					return "Jaszczurka zjada papier i wygrywa!";
				}
					else {
						return "Nożyczki tną papier i wygrywają!";
					}
	}

	else if (choice1 === "nożyczki") {			//nozyczki
		if (choice2 === "kamień") {
			return "Kamień tępi nożyczki i wygrywa!";
		}
			else if (choice2 === "Spock") {
				return "Spock niszczy nożyczki i wygrywa!";
			}
				else if (choice2 === "jaszczurka") {
					return "Nożyczki obcinają głowę jaszczurce i wygrywają!";
				}
					else {
						return "Nożyczki tną papier i wygrywają!";
					}
	}

	else if (choice1 === "Spock" || choice1 === "spock") {				//spock
		if (choice2 === "kamień") {
			return "Spock dezintegruje kamień i wygrywa!";
		}
			else if (choice2 === "nożyczki") {
				return "Spock niszczy nożyczki i wygrywa!";
			}
				else if (choice2 === "jaszczurka") {
					return "Jaszczurka zatruwa Spocka i wygrywa!";
				}
					else {
						return "Papier obala Spocka i wygrywa!";
					}
	}

	else if (choice1 === "jaszczurka") {		//jaszczurka
		if (choice2 === "kamień") {
			return "Kamień zgniata jaszczurkę i wygrywa!";
		}
			else if (choice2 === "Spock") {
				return "Jaszczurka zatruwa Spocka i wygrywa!";
			}
				else if (choice2 === "papier") {
					return "Jaszczurka zjada papier i wygrywa!";
				}
					else {
						return "Nożyczki obcinają głowę jaszczurce i wygrywają!";
					}
	}


};


alert(compare (userChoice, computerChoice));