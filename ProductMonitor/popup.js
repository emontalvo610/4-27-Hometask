document.getElementById("convert").addEventListener("click", function () {
  console.log("clicked");
  const amount = document.getElementById("amount").value;
  const fromCurrency = document.getElementById("currency-from").value;
  const toCurrency = document.getElementById("currency-to").value;
  console.log({ fromCurrency });
  console.log({ toCurrency });

  fetch(
    `https://v6.exchangerate-api.com/v6/f8f87253744c242daa34b5f5/latest/${fromCurrency}?apikey=f8f87253744c242daa34b5f5Y`
  )
    .then((response) => response.json())
    .then((data) => {
      const rate = data.conversion_rates[toCurrency];
      const convertedAmount = (amount * rate).toFixed(2);
      document.getElementById(
        "result"
      ).textContent = `Converted amount: ${convertedAmount} ${toCurrency}`;
    })
    .catch((error) => {
      console.error("Error fetching the currency rates:", error);
      document.getElementById("result").textContent =
        "Error fetching the currency rates.";
    });
});
