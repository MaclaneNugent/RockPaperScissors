var options = ['Rock', 'Paper', 'Scissors'];
var playerScore = 0;
var computerScore = 0;

function startRound(playerChoice) {
	var computersChoice = getComputersChoice();
	var roundWinner = getRoundWinner(playerChoice, computersChoice);

	setPoints(roundWinner)
	checkForWinner(playerScore, computerScore);
}

function getComputersChoice() {
	return options[Math.floor(Math.random() * 3)];
}

function getRoundWinner(playerChoice, computersChoice) {
	if ((playerChoice == 'Rock' && computersChoice == 'Scissors') || 
		(playerChoice == 'Paper' && computersChoice == 'Rock') || 
		(playerChoice == 'Scissors' && computersChoice == 'Paper')) {

		document.getElementById("round").innerHTML = 'WIN';
		return 'WIN';
	} 
	else if ((computersChoice == 'Rock' && playerChoice == 'Scissors') || 
		(computersChoice == 'Paper' && playerChoice == 'Rock') || 
		(computersChoice == 'Scissors' && playerChoice == 'Paper')) {

		document.getElementById("round").innerHTML = 'LOSE';
		return 'LOSE';
	}
	else {
		document.getElementById("round").innerHTML = 'TIE';
		return 'TIE';
	}
}

function setPoints(roundWinner) {
	if (roundWinner == 'WIN') {
		playerScore ++;
		document.getElementById("player").innerHTML = playerScore;
	}
	else if (roundWinner == 'LOSE') {
		computerScore ++;
		document.getElementById("computer").innerHTML = computerScore;
	}
	else {

	}
}

function checkForWinner(playerScore, computerScore) {
	if (playerScore == 5) {
		document.getElementById("round").innerHTML = 'YOU WIN';
		disableButtons();
		document.getElementById("modal-body").innerHTML = 'YOU WIN';
		$('#exampleModal').modal('show');
	}
	else if (computerScore == 5) {
		document.getElementById("round").innerHTML = 'YOU LOSE';
		disableButtons();
		document.getElementById("modal-body").innerHTML = 'YOU WIN';
		$('#exampleModal').modal('show');
	}
	else {
		console.log('keep going');
	}
}

function disableButtons() {
	var elems = document.getElementsByClassName("buttons");
	for(var i = 0; i < elems.length; i++) {
	    elems[i].disabled = true;
	}
}

function enableButtons() {
	var elems = document.getElementsByClassName("buttons");
	for(var i = 0; i < elems.length; i++) {
	    elems[i].disabled = false;
	}
}

function resetGame() {
	document.getElementById("player").innerHTML = 0;
	document.getElementById("computer").innerHTML = 0;
	document.getElementById("round").innerHTML = 'N/A';
	enableButtons();
}




