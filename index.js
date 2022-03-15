let passEl1 = document.getElementById("pass1")
let passEl2 = document.getElementById("pass2")
let passEl3 = document.getElementById("pass3")
let passEl4 = document.getElementById("pass4")

let passLength = document.getElementById("pass-length")
let passNotify = document.getElementById("pass-notify")

theClipboard = navigator.clipboard;


// Root variable
let root = document.querySelector(":root");

function init() {
    // Allows us to call functions only after passwordGenerator() has been called
    init.called = true
}


let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789,./;#~@:?>-<'.split('')
let size = alphabet.length
// Returns random number between 1 and alphabet.length
function randomNumber() {
    return Math.floor(Math.random() * size + 1)
}

passLength.addEventListener('keyup', function (e) {
    if (e.key === 'Enter' || e.key === 13) {
        passwordGenerator()
    }
})

function passwordGenerator() {
    init()

    let passwordChar1 = []
    let passwordChar2 = []
    let passwordChar3 = []
    let passwordChar4 = []

    length = parseInt(passLength.value)


    if (8 <= length && length <= 20) {

        // change text/color nack to original state if inputed wrong number
        passNotify.style.color = "var(--clr-light)"
        passNotify.textContent = "Select Password Length"

        for (let i = 0; i < length; i++) {
            passwordChar1.push(alphabet[randomNumber()])
            passwordChar2.push(alphabet[randomNumber()])
            passwordChar3.push(alphabet[randomNumber()])
            passwordChar4.push(alphabet[randomNumber()])
        }
        let password1 = passwordChar1.join('')
        let password2 = passwordChar2.join('')
        let password3 = passwordChar3.join('')
        let password4 = passwordChar4.join('')

        passEl1.textContent = password1
        passEl1.classList.add("new-style")

        passEl2.textContent = password2
        passEl2.classList.add("new-style")

        passEl3.textContent = password3
        passEl3.classList.add("new-style")

        passEl4.textContent = password4
        passEl4.classList.add("new-style")

        passNotify.textContent = "Select Password Length"

    } else {
        passNotify.style.color = "red"
        passNotify.textContent = "Please choose a value between 8 and 20"
    }
}


let icon1 = document.getElementById("icon-1")
let icon2 = document.getElementById("icon-2")
let icon3 = document.getElementById("icon-3")
let icon4 = document.getElementById("icon-4")

let btnPassword1 = document.getElementById("btn-pass1")
let btnPassword2 = document.getElementById("btn-pass2")
let btnPassword3 = document.getElementById("btn-pass3")
let btnPassword4 = document.getElementById("btn-pass4")




function copyText1() {
    if (init.called) {
        // Copy passowrd to clipboard
        navigator.clipboard.writeText(passEl1.textContent)

        // Change root var --copy-text: "Copy" to --copy-text: "Copied!"
        root.style.setProperty("--copy-text", '"Copied!"')

        // Confirm copied with icon tick
        icon1.classList.remove("bi-clipboard")
        icon1.classList.add("bi-check2-square")

        // Toggle back to copy icon/text after 1000ms
        setTimeout(function () {
            icon1.classList.add("bi-clipboard")
            icon1.classList.remove("bi-check2-square")
            root.style.setProperty("--copy-text", '"Copy"')
        }, 1000)
    }
}

function copyText2() {
    if (init.called) {
        // Copy passowrd to clipboard
        navigator.clipboard.writeText(passEl2.textContent)

        // Change root var --copy-text: "Copy" to --copy-text: "Copied!"
        root.style.setProperty("--copy-text", '"Copied!"')

        // Confirm copied with icon tick
        icon2.classList.remove("bi-clipboard")
        icon2.classList.add("bi-check2-square")

        // Toggle back to copy icon/text after 1000ms
        setTimeout(function () {
            icon2.classList.add("bi-clipboard")
            icon2.classList.remove("bi-check2-square")
            root.style.setProperty("--copy-text", '"Copy"')
        }, 1000)
    }
}

function copyText3() {
    if (init.called) {
        // Copy passowrd to clipboard
        navigator.clipboard.writeText(passEl3.textContent)

        // Change root var --copy-text: "Copy" to --copy-text: "Copied!"
        root.style.setProperty("--copy-text", '"Copied!"')

        // Confirm copied with icon tick
        icon3.classList.remove("bi-clipboard")
        icon3.classList.add("bi-check2-square")

        // Toggle back to copy icon/text after 1000ms
        setTimeout(function () {
            icon3.classList.add("bi-clipboard")
            icon3.classList.remove("bi-check2-square")
            root.style.setProperty("--copy-text", '"Copy"')
        }, 1000)
    }
}

function copyText4() {
    if (init.called) {
        // Copy passowrd to clipboard
        navigator.clipboard.writeText(passEl4.textContent)

        // Change root var --copy-text: "Copy" to --copy-text: "Copied!"
        root.style.setProperty("--copy-text", '"Copied!"')

        // Confirm copied with icon tick
        icon4.classList.remove("bi-clipboard")
        icon4.classList.add("bi-check2-square")

        // Toggle back to copy icon/text after 1000ms
        setTimeout(function () {
            icon4.classList.add("bi-clipboard")
            icon4.classList.remove("bi-check2-square")
            root.style.setProperty("--copy-text", '"Copy"')
        }, 1000)
    }
}



let sun = document.querySelector('.bi-brightness-high')


// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 
let darkModeToggle = document.querySelector('#dark-mode-toggle')

function enableDarkMode() {
    // 1. Add the class to the body
    document.body.classList.add('dark-mode')
    sun.classList.remove("bi-brightness-high")
    sun.classList.add("bi-moon-fill")
    

    // 2. Update darkMode in localStorage
    localStorage.setItem('darkMode', 'enabled');
}

function disableDarkMode() {
    // 1. Add the class to the body
    document.body.classList.remove('dark-mode')
    sun.classList.add("bi-brightness-high")
    sun.classList.remove("bi-moon-fill")

    // 2. Update darkMode in localStorage
    localStorage.setItem('darkMode', null);
}

if (darkMode === 'enabled') {
    enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
    // get their darkMode setting
    darkMode = localStorage.getItem('darkMode');

    // if it not current enabled, enable it
    if (darkMode !== 'enabled') {
        enableDarkMode();
        // if it has been enabled, turn it off  
    } else {
        disableDarkMode();
    }
});
