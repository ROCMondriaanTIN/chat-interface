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
		return;
	}

	const msgBox = createMessageBox(message);
	msgContainer.innerHTML += msgBox;

	msgInput.value = "";
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
