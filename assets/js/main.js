calculateTip = () => {
    const getUserCurrency = document.getElementById('userCurrency').value;
    const getUserAmount = parseInt(document.getElementById('userAmount').value);
    try {
        if (isNaN(getUserAmount)) throw "Your amount should be a number.";
    } catch (error) {
        alert(error);
    }

    const getUserSatisfactionLevel = document.getElementById('userSatisfactionLevel').value;

    if (getUserSatisfactionLevel == 'excellent') {
        tipCalculationValue = .3;
        tipCalculationPercentage = 30;
    } else if (getUserSatisfactionLevel == 'veryGood') {
        tipCalculationValue = .2;
        tipCalculationPercentage = 20;
    } else if (getUserSatisfactionLevel == 'good') {
        tipCalculationValue = .15;
        tipCalculationPercentage = 15;
    } else if (getUserSatisfactionLevel == 'ok') {
        tipCalculationValue = .1;
        tipCalculationPercentage = 10;
    } else if (getUserSatisfactionLevel == 'bad') {
        tipCalculationValue = .05;
        tipCalculationPercentage = 5;
    } else if (getUserSatisfactionLevel == 'veryBad') {
        tipCalculationValue = 0;
        tipCalculationPercentage = 0;
    }
    const tipCalculatedValue = getUserAmount * tipCalculationValue;
    const finalResult = getUserAmount + tipCalculatedValue;


    const finalOutput = `Your <strong>Amount</strong> is <span class="color-amount">${getUserAmount} ${getUserCurrency}.<br>
    Your satifaction level is ${getUserSatisfactionLevel}, so your <strong>Tip</strong> should be ${tipCalculationPercentage}%. This is <span class="color-tip">${tipCalculatedValue} ${getUserCurrency}.<br>
    Your <strong>Total</strong> is <span class="color-total">${finalResult}.<br>`
    if (isNaN(getUserAmount)) {
        document.getElementById("userInterfaceForm").style.display = "block";
        document.getElementById("messageOutput").style.display = "none";
    } else {
        document.getElementById('messageOutput').innerHTML = finalOutput;
        document.getElementById("userInterfaceForm").style.display = "none";
        document.getElementById("messageOutput").style.display = "block";
        document.getElementById("reloadButton").style.display = "block";
    }
}

reloadForm = () => {
    document.getElementById("messageOutput").style.display = "none";
    document.getElementById("userInterfaceForm").style.display = "block";
    document.getElementById("reloadButton").style.display = "none";
}

hideOutputArea = () => {
    document.getElementById("messageOutput").style.display = "none";
    document.getElementById("reloadButton").style.display = "none";
}