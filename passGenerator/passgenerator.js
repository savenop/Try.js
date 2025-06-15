const inputbox = document.getElementById("Password");
const length = 12;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#!$%&*-";

const allchar = uppercase + lowercase + symbol + number;

function pass(){
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    password += number[Math.floor(Math.random() * number.length)];

    while(length > password.length) {
        password += allchar[Math.floor(Math.random() * allchar.length)];
    }
    inputbox.value = password;
}

function copypass(){
    if (inputbox.value) {
        navigator.clipboard.writeText(inputbox.value);
        const notif = document.getElementById("copy-notification");
        notif.classList.add("show");
        setTimeout(() => {
            notif.classList.remove("show");
        }, 1200);
    }
}