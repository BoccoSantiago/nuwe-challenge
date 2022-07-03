function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  if (enteredCode === correctCode) {
    let arrayCurrentDate = currentDate.split(",");
    let arrayExpirationDate = expirationDate.split(",");
    let currentMonth = arrayCurrentDate[0];
    let expirationMonth = arrayExpirationDate[0];
    let currentYear = arrayCurrentDate[1];
    let expirationYear = arrayExpirationDate[1];

    if (currentYear < expirationYear) {
      return true;
    } else if (
      currentYear <= expirationYear &&
      currentMonth <= expirationMonth
    ) {
      return true;
    } else {
      return false;
    }
  }
  return false;
}
