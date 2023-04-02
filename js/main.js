console.log("main.js loaded.");

const msgContainer = document.querySelector("#chat-messages");
const msgInput = document.querySelector("#text-message");
const sendBtn = document.querySelector("#chat-send");
const alert = document.querySelector("#alert-container");
const closeBtn = document.querySelector("#delete-message");

let toggle = true;

sendBtn.addEventListener("click", (e) => {
	const message = msgInput.value;
	if (message.trim() === "") {
		alert.style.visibility = "visible";
		return;
	}

	// const msgBox = createMessageBox(message);
	const msgBox = createMessage(message, toggle);

	msgContainer.innerHTML += msgBox;

	msgInput.value = "";

	toggle = !toggle;
});

msgInput.addEventListener("keypress", (e) => {
	if (e.key === "Enter") {
		e.preventDefault();

		sendBtn.click();
	}
});

closeBtn.addEventListener("click", (e) => {
	alert.style.visibility = "hidden";
});

function createMessageBox(message) {
	const box = `
            <div class="card">
                <div class="card-content">
                    <div class="content">
                        ${message}
                    </div>
                </div>
            </div>
    `;

	return box;
}

function createMessage(message, sending = true) {
	const box = `
            <article class="message ${sending ? "is-info" : "is-success"}">
                <div class="message-body p-1">
                    <h3><strong>Neo</strong></h3>
                    <p class="py-1">${message}</p>
                    <div class="is-flex"><span style="font-size:11px; font-weight: bold">${new Date().toLocaleTimeString()}</span></div>
                </div>
            </article>
    `;

	return box;
}
