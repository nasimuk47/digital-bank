// step 1-----------------

document.getElementById("btn-deposit").addEventListener("click", function () {
    // step2------------
    const depusitfield = document.getElementById("depusit-field");
    const newDepusitammountStrings = depusitfield.value;
    const newDepusitvalueString = parseFloat(newDepusitammountStrings);

    // step 3------------------------

    const depositTotalelement = document.getElementById("depusit-total");
    const previusDepusittotalString = depositTotalelement.innerText;
    const previusDepusittotal = parseFloat(previusDepusittotalString);

    // depusit sum ------------------

    const currentdepusitTotal = previusDepusittotal + newDepusitvalueString;
    depositTotalelement.innerText = currentdepusitTotal;

    // balance tottal-----------------
    // step5------------------

    const balancetotalelement = document.getElementById("balance-total");
    const previusbalnaceTotalString = balancetotalelement.innerText;
    previusbalnaceTotal = parseFloat(previusbalnaceTotalString);
    // step6---------
    const currentbalancetotal = previusbalnaceTotal + newDepusitvalueString;
    // set the balance total-----
    balancetotalelement.innerText = currentbalancetotal;

    // clear step-----------------------------
    depusitfield.value = "";
});
