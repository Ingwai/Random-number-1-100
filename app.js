let number = document.querySelector('.number');
const prevchoice = document.querySelector('.choice');
const winnerbox = document.querySelector('.winnerbox');
const submitBtn = document.querySelector('button');
const heading = document.querySelector('h2');
let guessCount = 1;
let prevNumber = [];
let scope = 20;
let round = 5;
let randomNumber = Math.floor(Math.random() * scope + 1);
heading.textContent = `Odgadnij liczbę od 1 do ${scope} w ${round} próbach`;
number.focus();
function checkGuess() {
	let userGuess = Number(number.value);
	console.log(randomNumber, userGuess, guessCount, prevNumber);
	prevNumber.push(userGuess);

	if (isNaN(userGuess)) {
		winnerbox.textContent = 'Podaj ćwoku liczbę z odpowiedniego zakresu';
		winnerbox.style.color = 'red';
		number.disabled = true;
		return gameOver();
	}

	if (userGuess <= 0 || userGuess > scope || userGuess === ' ') {
		winnerbox.textContent = 'Podaj ćwoku liczbę z odpowiedniego zakresu';
		winnerbox.style.color = 'red';
		number.disabled = true;
		return gameOver();
	}

	if (userGuess > randomNumber) {
		prevchoice.textContent = `Wcześniej podane liczby: ${prevNumber}`;
		winnerbox.style.color = 'red';
		winnerbox.textContent = 'Wybrana liczba jest za duża';
	} else if (userGuess < randomNumber) {
		prevchoice.textContent = `Wcześniej podane liczby: ${prevNumber}`;
		winnerbox.style.color = 'red';
		winnerbox.textContent = 'Wybrana liczba jest za mała';
	} else {
		winnerbox.style.color = 'green';
		winnerbox.textContent = `Brawo!!! Odgadłeś liczbę za ${guessCount} razem`;
		number.disabled = true;
		gameOver();
	}
	if (guessCount === round && userGuess !== randomNumber) {
		winnerbox.textContent = `Sorry Winnetou ale nie odgadłeś. To była ${round} próba. Nieodgadniętą liczbą była liczba ${randomNumber}`;
		winnerbox.style.color = 'red';
		number.disabled = true;
		gameOver();
	}

	guessCount++;
	number.value = '';
	number.focus();
}

function gameOver() {
	submitBtn.textContent = 'Restart';
	submitBtn.addEventListener('click', () => location.reload());
}

submitBtn.addEventListener('click', checkGuess);
