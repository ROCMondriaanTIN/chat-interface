console.log("main.js loaded.");

const scrollElement = document.querySelector("#column-chat");
const msgContainer = document.querySelector("#chat-messages");
const msgInput = document.querySelector("#text-message");
const sendBtn = document.querySelector("#chat-send");
const closeBtn = document.querySelector("#delete-message");

let toggle = true;

sendBtn.addEventListener("click", (e) => {
	sendMessage();
});

msgInput.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    sendMessage();
  }
})

function sendMessage() {
    const messageText = msgInput.value;

	if (messageText.trim() === "") {
		alert("Typ een bericht");

		return;
	}

    const message = createMessageObject(messageText);

	const msgBox = createMessageBox(message, toggle);
	msgContainer.innerHTML += msgBox;
	msgInput.value = "";

	toggle = !toggle;
}


function createMessageObject(message) {
    const newMessage = {
        ID: 0,
        userName: "Matthijs",
        date: new Date().toLocaleTimeString(),
        messageText: message
    }

    return newMessage;
}

function createMessageBox(message, toggle) {
	const box = `
            <div class="messagebox ${toggle ? "bg_enable" : ""}">
            <div class="messagebox__sidebox">
                <div class="messagebox__imgbox">
                    <img src=${toggle ? "../img/female.svg" : "../img/male.svg"} alt="avatar">
                </div>
            </div>
            <div class="messagebox__body">
                <div class="messagebox__header">
                    User 12345<span class="timestamp">${message.date}</span>
                </div>
                <div class="messagebox__content">
                    ${message.messageText}
                </div>
            </div>
            <div class="messagebox__footer">
            </div>
        </div>
    `;

	return box;
}

function createMessageBox(message, sending = true) {
    const name = toggle ? "Chatbot": "Matthijs";

	const box = `
            <article class="message ${sending ? "is-info" : "is-success"}">
                <div class="message-body p-1">
                    <h3><strong>${name}</strong></h3>
                    <p class="py-1">${message.messageText}</p>
                    <div class="is-flex"><span style="font-size:11px; font-weight: bold">${new Date().toLocaleTimeString()}</span></div>
                </div>
            </article>
    `;

	return box;
}

// Auto scroll at new messages
const onAppend = function (elem, f) {
	const observer = new MutationObserver(function (mutations) {
		mutations.forEach(function (m) {
			if (m.addedNodes.length) {
				f(m.addedNodes);
			}
		});
	});
	observer.observe(elem, { childList: true });
};

onAppend(msgContainer, function (added) {
	console.log("onAdded: ", added);

	msgContainer.scrollTop = msgContainer.scrollHeight;
});



