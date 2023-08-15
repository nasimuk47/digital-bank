// step 1 event handler use button

document.getElementById("btn-submit").addEventListener("click", function () {
    // step 2 email------------

    const emailInput = document.getElementById("email-address");
    const email = emailInput.value;
    //  step 3 password ----------------
    const inputPassword = document.getElementById("password-address");
    const password = inputPassword.value;

    // veryfy email and password------------
    if (email === "jamud.pb11@gmail.com" && password === "account.1234") {
        window.location.href = "bank.html";
    } else {
        alert("wrong");
    }
});
