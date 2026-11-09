let field = document.getElementById('name');
const greeting = document.getElementById('greet-box');
const btn = document.getElementById('submit');

function showGreeting() {
	let name = field.value.trim();

	if(name == "") {
		greeting.innerHTML = 'Please enter your name.';
	}else {
		greeting.innerHTML = `Hello, ${name}`;
	}
}

function handleKeyPress(event) {
	if(event.key === "Enter") {
		showGreeting();
	}
}

field.addEventListener('keyup', handleKeyPress);
btn.addEventListener('click', showGreeting);

greeting.addEventListener('mouseover', (e) => {
	greeting.style = 'color: red; font-size: 32px;';
})

greeting.addEventListener('mouseout', (e) => {
	greeting.style = 'color: black;';
})