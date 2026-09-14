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
