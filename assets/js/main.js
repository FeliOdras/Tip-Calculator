createUserInterface = () => {
    const formBefore = `<form method="GET" onsubmit="return false;">`
    const fieldCurrency = `<label for="currency">Currency</label>
        <select name="currency" id="userCurrency">
            <option>--- Choose a currency ---</option>
            <option value="€">€ (Euro)</option>
            <option value="$">$ (US Dollar)</option>
            <option value="£">£ (Britsh Pound)</option>
            <option value="¥">¥ (Yen)</option>
            <option value="other">Other</option>
        </select>`;
    const fieldAmount = `<label for="amount">Amount</label>
        <input type="number" name="amount" id="userAmount">`;
    const fieldSatisfactionLevel = `<label for="satisfactionLevel">Satisfaction level</label>
        <select name="satisfactionLevel" id="userSatisfactionLevel">
            <option value="execellent">Excellent</option>
            <option value="veryGood">Very Good</option>
            <option value="good">Good</option>
            <option value="ok">Ok</option>
            <option value="bad">bad</option>
            <option value="veryBad">Very Bad</option>
        </select>`;
    const buttonSubmit = `<input type="submit" value="Calculate Tip" class="button">`;
    const formAfter = `</form>`;

    const userInterfaceForm = `${formBefore} <br> ${fieldCurrency} <br> ${fieldAmount} <br> ${fieldSatisfactionLevel} <br> ${buttonSubmit}${formAfter}`;
    document.getElementById('userInterfaceForm').innerHTML = userInterfaceForm;
}

calculateTip = (amount, satisfaction) => {
    const tip = amount * satisfaction;
    return tip;
}
console.log(calculateTip(20, .10))