const allCS4 = document.querySelectorAll('.cs4');
const gecs = document.querySelectorAll('.gec');
const it101s = document.querySelectorAll('.it101');
const it103s = document.querySelectorAll('.it103');

const lunch = document.getElementById('lunch');
const table = document.querySelector('.table');

table.addEventListener('dblclick', (e) => {
    table.style.border = "5px solid blue";
});

allCS4.forEach((cs4) => {
    cs4.addEventListener('click', (e) => {
        cs4.style.backgroundColor = "darkgreen";
        cs4.style.color = "white";
        cs4.style.fontSize = 12;
        cs4.style.fontFamily = "Arial";
    });
});

it101s.forEach((it101) => {
    it101.addEventListener('dblclick', (e) => {
        it101.style.backgroundColor = "red"
        it101.style.fontSize = 12
        it101.style.fontFamily = "Arial";
        it101.style.color = "white"
    })
})

lunch.addEventListener('mouseover', (e) => {
    lunch.style.backgroundColor = "black";
    lunch.style.fontSize = 12;
    lunch.style.fontFamily = "Arial";
    lunch.style.color = "white";
});

it103s.forEach((it103) => {
    document.body.addEventListener('keyup', (e) => {
        if (event.key === ' ') {
            it103.style.backgroundColor = "yellow"
            it103.style.fontSize = 12
            it103.style.fontFamily = "Arial";
        }
    });
});

gecs.forEach((gec) => {
    document.body.addEventListener('keyup', (e) => {
        if (event.key === "Enter") {
            gec.style.backgroundColor = "orange";
            gec.style.color = "white";
            gec.style.fontFamily = "Arial";
            gec.style.fontSize = 12;
        }
    });
});