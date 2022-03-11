let passEl1 = document.getElementById("pass1")
let passEl2 = document.getElementById("pass2")
let passEl3 = document.getElementById("pass3")
let passEl4 = document.getElementById("pass4")


let passLength = document.getElementById("pass-length")

let passNotify = document.getElementById("pass-notify")

// function init() {
//     // Allows us to call functions only after passwordGenerator() has been called
//     init.called = true
// }


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
    // // Call init() so text can only be copied once password generated
    // init()

    let passwordChar1 = []
    let passwordChar2 = []
    let passwordChar3 = []
    let passwordChar4 = []

    length = parseInt(passLength.value)


    if (8 <= length && length <= 20) {
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

        passNotify.style.color = "white"
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

window.getComputedStyle(icon1, '::after')

// Root variable
let root = document.querySelector(":root");


function copyText() {
    btnPassword1.addEventListener('click', () => {
        // Copy passowrd to clipboard
        navigator.clipboard.writeText(passEl1.textContent)

        // Change root var --copy-text: "Copy" to --copy-text: "Copied!"
        root.style.setProperty("--copy-text", '"Copied!"')

        // Confirm copied with icon tick
        icon1.classList.remove("bi-clipboard")
        icon1.classList.add("bi-check2-square")

        // Toggle back to copy icon/text after 500ms
        setTimeout(function() {
            icon1.classList.add("bi-clipboard")
            icon1.classList.remove("bi-check2-square")
            root.style.setProperty("--copy-text", '"Copy"')
        }, 500)
    })


    btnPassword2.addEventListener('click', () => {
        navigator.clipboard.writeText(passEl2.textContent)
        root.style.setProperty("--copy-text", '"Copied!"')

        icon2.classList.remove("bi-clipboard")
        icon2.classList.add("bi-check2-square")

        setTimeout(function () {
            icon2.classList.add("bi-clipboard")
            icon2.classList.remove("bi-check2-square")
            root.style.setProperty("--copy-text", '"Copy"')
        }, 500)
    })


    btnPassword3.addEventListener('click', () => {
        navigator.clipboard.writeText(passEl3.textContent)
        root.style.setProperty("--copy-text", '"Copied!"')

        icon3.classList.remove("bi-clipboard")
        icon3.classList.add("bi-check2-square")

        setTimeout(function () {
            icon3.classList.add("bi-clipboard")
            icon3.classList.remove("bi-check2-square")
            root.style.setProperty("--copy-text", '"Copy"')
        }, 500)
    })


    btnPassword4.addEventListener('click', () => {
        navigator.clipboard.writeText(passEl4.textContent)
        root.style.setProperty("--copy-text", '"Copied!"')

        icon4.classList.remove("bi-clipboard")
        icon4.classList.add("bi-check2-square")

        setTimeout(function () {
            icon4.classList.add("bi-clipboard")
            icon4.classList.remove("bi-check2-square")
            root.style.setProperty("--copy-text", '"Copy"')
        }, 500)
    })

}