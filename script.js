let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";

// ---------------- BUTTON CLICK SUPPORT ----------------
Array.from(buttons).forEach(button => {
    button.addEventListener('click', (e) => {
        handleInput(e.target.innerHTML);
    });
});

// ---------------- KEYBOARD SUPPORT ----------------
document.addEventListener('keydown', (e) => {
    let key = e.key;

    // numbers
    if (!isNaN(key)) {
        handleInput(key);
    }

    // operators
    else if (key === '+' || key === '-' || key === '*' || key === '/' || key === '%') {
        handleInput(key);
    }

    // decimal
    else if (key === '.') {
        handleInput('.');
    }

    // enter (=)
    else if (key === 'Enter') {
        handleInput('=');
    }

    // backspace (DEL)
    else if (key === 'Backspace' || key === 'Delete') {
        handleInput('DEL');
    }

    // escape (AC)
    else if (key === 'Escape') {
        handleInput('AC');
    }
});

// ---------------- COMMON FUNCTION ----------------
function handleInput(value) {
    if (value === '=') {
        try {
            string = eval(string);
            input.value = string;
        } catch {
            input.value = "Error";
            string = "";
        }
    } 
    else if (value === 'AC') {
        string = "";
        input.value = string;
    } 
    else if (value === 'DEL') {
        string = string.substring(0, string.length - 1);
        input.value = string;
    } 
    else {
        string += value;
        input.value = string;
    }
}
