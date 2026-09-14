// OINANCE PAY V1.2
// DEMO ONLY

let balanceVisible = true;

const balance = document.getElementById("balance");
const hideBalance = document.getElementById("hideBalance");
const message = document.getElementById("message");


// ==============================
// WALLET BALANCE
// ==============================

hideBalance.addEventListener("click", function () {

    if (balanceVisible) {

        balance.textContent = "₦••••••";
        hideBalance.textContent = "👁‍🗨";

        balanceVisible = false;

    } else {

        balance.textContent = "₦327,500.46";
        hideBalance.textContent = "👁";

        balanceVisible = true;

    }

});


// ==============================
// GENERAL MESSAGE
// ==============================

function showMessage(text) {

    message.textContent = text + " — Coming soon";
    message.style.display = "block";

    setTimeout(function () {
        message.style.display = "none";
    }, 2000);

}


// ==============================
// SEND MONEY
// ==============================

function openSendMoney() {

    document.getElementById("sendScreen").style.display = "block";

}


function closeSendMoney() {

    document.getElementById("sendScreen").style.display = "none";

}


// ==============================
// DEMO ACCOUNT NAME
// ==============================

function getAccountName(accountNumber, bank) {

    if (
        accountNumber === "0123456789" &&
        bank === "GTBank"
    ) {

        return "EMEANU CHRIS";

    }

    return null;

}


// ==============================
// CONTINUE SEND
// ==============================

function continueSend() {

    const recipient =
        document.getElementById("recipient").value.trim();

    const bank =
        document.getElementById("bank").value;

    const amount =
        document.getElementById("amount").value;

    const description =
        document.getElementById("description").value.trim();


    if (!recipient) {
        alert("Please enter the recipient.");
        return;
    }


    if (bank === "Select bank") {
        alert("Please select a bank.");
        return;
    }


    if (!amount || Number(amount) <= 0) {
        alert("Please enter a valid amount.");
        return;
    }


    const accountName =
        getAccountName(recipient, bank);


    if (!accountName) {

        alert(
            "Account name could not be found.\n\n" +
            "For testing use:\n" +
            "Account: 0123456789\n" +
            "Bank: GTBank"
        );

        return;

    }


    document.getElementById("confirmAmount").textContent =
        "₦" + Number(amount).toLocaleString();

    document.getElementById("confirmRecipient").textContent =
        accountName;

    document.getElementById("confirmBank").textContent =
        bank;

    document.getElementById("confirmDescription").textContent =
        description || "No description";


    document.getElementById("sendScreen").style.display =
        "none";

    document.getElementById("confirmScreen").style.display =
        "block";

}


// ==============================
// BACK TO SEND
// ==============================

function backToSend() {

    document.getElementById("confirmScreen").style.display =
        "none";

    document.getElementById("sendScreen").style.display =
        "block";

}


// ==============================
// CONFIRM & PAY
// ==============================
// IMPORTANT:
// This function ONLY opens the PIN screen.
// It does NOT complete the payment.

function completePayment() {

    const amount =
        Number(document.getElementById("amount").value);


    if (!amount || amount <= 0) {

        alert("Invalid payment amount.");

        return;

    }


    document.getElementById("confirmScreen").style.display =
        "none";

    document.getElementById("pinScreen").style.display =
        "block";


    document.getElementById("pinInput").value =
        "";

    document.getElementById("pinError").textContent =
        "";

    updatePinDots();


    // Automatically put the cursor inside PIN box
    setTimeout(function () {

        document.getElementById("pinInput").focus();

    }, 100);

}


// ==============================
// BACK FROM PIN
// ==============================

function backToConfirmation() {

    document.getElementById("pinScreen").style.display =
        "none";

    document.getElementById("confirmScreen").style.display =
        "block";

}


// ==============================
// PIN DOTS
// ==============================

function updatePinDots() {

    const pin =
        document.getElementById("pinInput").value;


    for (let i = 1; i <= 4; i++) {

        const dot =
            document.getElementById("dot" + i);


        if (i <= pin.length) {

            dot.classList.add("filled");

        } else {

            dot.classList.remove("filled");

        }

    }

}


// ==============================
// PIN INPUT
// ==============================

document.getElementById("pinInput").addEventListener(
    "input",
    function () {

        // Allow numbers only
        this.value = this.value.replace(/\D/g, "");

        updatePinDots();

    }
);


// ==============================
// VERIFY PIN
// ==============================

function verifyPin() {

    const enteredPin =
        document.getElementById("pinInput").value;


    const correctPin = "1234";


    if (enteredPin.length !== 4) {

        document.getElementById("pinError").textContent =
            "Enter your 4-digit PIN.";

        return;

    }


    if (enteredPin !== correctPin) {

        document.getElementById("pinError").textContent =
            "Incorrect PIN. Please try again.";

        document.getElementById("pinInput").value =
            "";

        updatePinDots();

        return;

    }


    // ==========================
    // PIN CORRECT
    // ==========================

    const amount =
        Number(document.getElementById("amount").value);


    document.getElementById("pinError").textContent =
        "";


    document.getElementById("pinScreen").style.display =
        "none";


    document.getElementById("successAmount").textContent =
        "₦" + amount.toLocaleString();


    document.getElementById("successScreen").style.display =
        "block";

}


// ==============================
// FINISH PAYMENT
// ==============================

function finishPayment() {

    document.getElementById("successScreen").style.display =
        "none";


    document.getElementById("recipient").value =
        "";

    document.getElementById("amount").value =
        "";

    document.getElementById("description").value =
        "";

    document.getElementById("bank").value =
        "Select bank";

    document.getElementById("pinInput").value =
        "";

    updatePinDots();

}
