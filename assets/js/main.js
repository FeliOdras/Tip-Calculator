function calculateTip(amount, satisfaction) {
    const tip = amount * satisfaction;

    return tip;
}
console.log(calculateTip(20, .10))