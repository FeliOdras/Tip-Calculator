calculateTip = (amount, satisfactionLevel) => {
    const tip = amount * satisfactionLevel;
    return tip;
}
console.log(calculateTip(20, .10))