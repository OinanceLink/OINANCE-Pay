// OINANCE Pay V1

let balanceVisible = true;

const balance = document.getElementById("balance");
const hideBalance = document.getElementById("hideBalance");
const message = document.getElementById("message");

// Hide / show wallet balance
hideBalance.addEventListener("click", function () {

    if (balanceVisible) {
        balance.textContent = "₦••••••";
        hideBalance.textContent = "👁‍🗨";
        balanceVisible = false;
    } else {
        balance.textContent = "₦100,000.00";
        hideBalance.textContent = "👁";
        balanceVisible = true;
    }

});


// Button messages
function showMessage(text) {

    message.textContent = text + " — Coming soon";
    message.style.display = "block";

    setTimeout(function () {
        message.style.display = "none";
    }, 2000);

}
// SEND MONEY FLOW

function openSendMoney() {
    document.getElementById("sendScreen").style.display = "block";
}

function closeSendMoney() {
    document.getElementById("sendScreen").style.display = "none";
}

function continueSend() {

    const recipient = document.getElementById("recipient").value;
    const bank = document.getElementById("bank").value;
    const amount = document.getElementById("amount").value;
    const description = document.getElementById("description").value;

    if (!recipient || bank === "Select bank" || !amount) {
        alert("Please complete the payment details.");
        return;
    }

    document.getElementById("confirmAmount").textContent =
        "₦" + Number(amount).toLocaleString();

    document.getElementById("confirmRecipient").textContent =
        recipient;

    document.getElementById("confirmBank").textContent =
        bank;

    document.getElementById("confirmDescription").textContent =
        description || "No description";

    document.getElementById("sendScreen").style.display = "none";

    document.getElementById("confirmScreen").style.display = "block";
}

function backToSend() {
    document.getElementById("confirmScreen").style.display = "none";
    document.getElementById("sendScreen").style.display = "block";
}

function completePayment() {

    const amount = document.getElementById("amount").value;

    document.getElementById("confirmScreen").style.display = "none";

    document.getElementById("successAmount").textContent =
        "₦" + Number(amount).toLocaleString();

    document.getElementById("successScreen").style.display = "block";
}

function finishPayment() {

    document.getElementById("successScreen").style.display = "none";

    document.getElementById("recipient").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("description").value = "";

}
