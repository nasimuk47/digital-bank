// step 1------------------------------
document.getElementById("btn-widthdraw").addEventListener("click", function () {
    // step2---------
    const widthdrawfield = document.getElementById("withdraw-field");
    const newwithdrawammountstring = widthdrawfield.value;
    const newwidthdrawammount = parseFloat(newwithdrawammountstring);

    // step3-------------
    const widthdrawtotelekement = document.getElementById("widthdraw-total");
    const previouswithdrawtotalstring = widthdrawtotelekement.innerText;
    const previouswithdrawtotal = parseFloat(previouswithdrawtotalstring);

    // step4-----------
    const currentwidthdrawtotal = previouswithdrawtotal + newwidthdrawammount;
    widthdrawtotelekement.innerText = currentwidthdrawtotal;
    // step5----------
    const balancetotalelement = document.getElementById("balance-total");
    const previousbalancetotalstring = balancetotalelement.innerText;

    const previousbalancetotal = parseFloat(previousbalancetotalstring);
    console.log(previousbalancetotal);
    // step6-------------
    const newbalancetottall = previousbalancetotal - newwidthdrawammount;
    balancetotalelement.innerText = newbalancetottall;

    // step7--------
    widthdrawfield.value = "";
});
