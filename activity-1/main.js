let field = document.getElementById('username');
const outputBox = document.getElementById('outputBox');
const btn = document.getElementById('submit'); 

// Change output text to a random color
function changeColor() {
	const colors = ['yellow', 'red', 'cyan', 'pink', 'green'];

	if(outputBox != "") {
		// Apply random color
		outputBox.style = `color: ${colors[Math.floor(Math.random() * colors.length)]};`;
	}else {
		console.log("Display Name is Blank!");
	}
}

// Validate input and display greeting
function showGreeting() {
	let username = field.value.trim(); // Remove whitespace

	if(username == "" || username == null) {
		outputBox.innerHTML = 'Please enter your username.';
	}else {
		outputBox.innerHTML = `Hello, ${username}`;
	}
	field.blur(); // Remove focus from input
}
 
// Handle global keyboard shortcuts
function keyPress(event) {
	switch(event.key) {
		case ' ':
			changeColor(); // Spacebar changes color
			break;
		case 'Enter':
			showGreeting(); // Enter submits greeting
			break;
		default:
			break;
	}
}

// Toggle font sizing class on hover
function hoverEvent() {
	outputBox.classList.toggle('large');
}

// Event Listeners
btn.addEventListener('click', showGreeting);
outputBox.addEventListener('click', changeColor);
outputBox.addEventListener('mouseover', hoverEvent);
outputBox.addEventListener('mouseout', hoverEvent);
document.body.addEventListener('keyup', keyPress);