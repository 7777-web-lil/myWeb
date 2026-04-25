function changeTheme() {
    let body = document.querySelector("body");
    body.classList.toggle("dark");
}

let button = document.querySelector(".theme-button");

button.addEventListener("click", changeTheme);
let heroTitle = document.querySelector(".typing-text");
let text = "Simple Systems, Stay Organised";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        heroTitle.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 150);
    }
}

typeEffect();

emailjs.init({
    publicKey: "g-dnEtpDa84-DZLZP",
});

function sendEmail(data) {
    return emailjs.send("service_n15ovp8", "template_lnkykb4", data);
}

const form = document.getElementById("contact-form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = {
            name: form.name.value.trim(),
            email: form.email.value.trim(),
            message: form.message.value.trim(),
        };

        if (!formData.name || !formData.email || !formData.message) {
            alert("Please fill in all fields.");
            return;
        }

        sendEmail(formData)
            .then(() => {
                alert("Message sent successfully!");
                form.reset();
            })
            .catch((error) => {
                console.error("Email failed:", error);
                alert("Failed to send message.");
            });
    });
}

const bookBtn = document.getElementById("book-btn");

if (bookBtn) {
    bookBtn.addEventListener("click", function (e) {
        e.preventDefault();

        const name = prompt("Enter your name:");
        if (!name) return;

        const email = prompt("Enter your email:");
        if (!email) return;

        const message = prompt("What do you need help with?");
        if (!message) return;

        sendEmail({
            name: name.trim(),
            email: email.trim(),
            message: message.trim(),
        })
            .then(() => {
                alert("Booking request sent!");
            })
            .catch((error) => {
                console.error("Booking email failed:", error);
                alert("Failed to send booking request.");
            });
    });
}