calculateTip = () => {
    const getUserCurrency = document.getElementById('userCurrency').value;
    const getUserAmount = parseInt(document.getElementById('userAmount').value);
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

    try {
        if (isNaN(getUserAmount)) throw "Your amount should be a number.";
    } catch (error) {
        alert(error);
    }

    const finalOutput = `Your <strong>Amount</strong> is <span class="color-amount">${getUserAmount} ${getUserCurrency}.<br>
    Your satifaction level is ${getUserSatisfactionLevel}, so your <strong>Tip</strong> should be ${tipCalculationPercentage}%. This is <span class="color-tip">${tipCalculatedValue} ${getUserCurrency}.<br>
    Your <strong>Total</strong> is <span class="color-total">${finalResult}.`
    finalOutput
}
calculateTip()