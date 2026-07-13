const bot = document.getElementById("chatbot");
const toggle = document.getElementById("chat-toggle");
const closeBtn = document.getElementById("close-chat");

toggle.onclick = function () {
    bot.style.display = "block";
};

closeBtn.onclick = function () {
    bot.style.display = "none";
};

function openEnquiry() {
    window.location.href = "enquiry.html";
}

function openWhatsApp() {
    window.open("https://wa.me/919140767749", "_blank");
}
