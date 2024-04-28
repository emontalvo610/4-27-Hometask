var currencies = [
  { code: "AUD", name: "Australian Dollar" },
  { code: "CAD", name: "Canadian Dollar" },
  { code: "CNY", name: "Chinese Yuan" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "British Pound" },
  { code: "HKD", name: "Hong Kong Dollar" },
  { code: "INR", name: "Indian Rupee" },
  { code: "JPY", name: "Japanese Yen" },
  { code: "USD", name: "US Dollar" },
  { code: "SEK", name: "Swedish Krona" },
  // Add other currencies as needed
];

// Get the select element
var selectElement = document.getElementById("currency-from");
var selectElement2 = document.getElementById("currency-to");
// Iterate over the currencies array and create option elements
currencies.forEach(function (currency) {
  var optionElement = document.createElement("option");
  optionElement.value = currency.code;
  optionElement.textContent = currency.name;
  var optionElement2 = document.createElement("option");
  optionElement2.value = currency.code;
  optionElement2.textContent = currency.name;
  selectElement.appendChild(optionElement);
  selectElement2.appendChild(optionElement2);
});

document.getElementById("convert").addEventListener("click", function () {
  const amount = document.getElementById("amount").value;
  const fromCurrency = document.getElementById("currency-from").value;
  const toCurrency = document.getElementById("currency-to").value;

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
