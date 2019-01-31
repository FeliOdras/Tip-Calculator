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
    console.log(getUserAmount);
    const tipCalculatedValue = getUserAmount * tipCalculationValue;
    const finalResult = getUserAmount + tipCalculatedValue;
    console.log(getUserCurrency);

    try {
        if (isNaN(getUserAmount)) throw "Your amount should be a number.";
    } catch (error) {
        alert(error);
    }
}
calculateTip()