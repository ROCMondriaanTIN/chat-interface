console.log("main.js loaded.");

const msgContainer = document.querySelector("#chat-messages");
const msgInput = document.querySelector("#text-message");
const sendBtn = document.querySelector("#chat-send");
const alert = document.querySelector("#alert-container");
const closeBtn = document.querySelector("#delete-message");

sendBtn.addEventListener("click", (e) => {
	const message = msgInput.value;
	if (message.trim() === "") {
		alert.style.visibility = "visible";
	}
});

closeBtn.addEventListener("click", (e) => {
	alert.style.visibility = "hidden";
});
