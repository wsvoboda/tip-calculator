const form = document.querySelector("form");
const validateNumbers = (number) => {
  myRegex = /^(0|[1-9]\d*)?(\.\d+)?(?<=\d)$/;
  return myRegex.test(number);
};

form.addEventListener("submit", (event) => {
  const billInput = document.querySelector("#bill-amount");
  const tipInput = document.querySelector("#tip-amount");
  if (!validateNumbers(billInput.value) || !validateNumbers(tipInput.value)) {
    event.preventDefault();
    alert("Please enter valid numerical values only");
  } else {
    event.preventDefault();
    calculate();
  }
});

const calculate = () => {
  const billAmountEntered = Number(
    document.querySelector("#bill-amount").value
  );
  const tipPercentageEntered =
    Number(document.querySelector("#tip-amount").value) / 100;
  const tipMultiplier = Number(1 + tipPercentageEntered);
  const total = billAmountEntered * tipMultiplier;
  const roundedTotal = total.toFixed(2);
  const giveTotal = document.querySelector(".total-amount");
  giveTotal.innerHTML = `$ ${roundedTotal}`;
  const calculatedTipAmount = billAmountEntered * tipPercentageEntered;
  const roundedTip = calculatedTipAmount.toFixed(2);
  const newTip = document.createElement("li");
  newTip.innerHTML = roundedTip;
  const allTipsListed = document.querySelector(".tip-list");
  allTipsListed.append(newTip);
};
