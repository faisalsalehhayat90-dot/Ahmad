function calculate() {
  let price = document.getElementById("price").value;
  let d1 = document.getElementById("discount1").value;
  let d2 = document.getElementById("discount2").value;

  let afterFirst = price - (price * d1 / 100);
  let finalPrice = afterFirst - (afterFirst * d2 / 100);

  document.getElementById("result").innerText =
    "Final Price: $" + finalPrice.toFixed(2);
}
