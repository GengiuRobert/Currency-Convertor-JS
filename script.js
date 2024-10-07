const apiKey = "868cf84936b710c94a34b54c";
const convertButton = document.getElementById('convertBtn');
const fromCurrencySelector = document.getElementById('fromCurrency');
const toCurrencySelector = document.getElementById('toCurrency');
const currencies = [
    "AED",
    "AFN",
    "ALL",
    "AMD",
    "ANG",
    "AOA",
    "ARS",
    "AUD",
    "AWG",
    "AZN",
    "BAM",
    "BBD",
    "BDT",
    "BGN",
    "BHD",
    "BIF",
    "BMD",
    "BND",
    "BOB",
    "BRL",
    "BSD",
    "BTC",
    "BTN",
    "BWP",
    "BYN",
    "BYR",
    "BZD",
    "CAD",
    "CDF",
    "CHF",
    "CLF",
    "CLP",
    "CNY",
    "CNH",
    "COP",
    "CRC",
    "CUC",
    "CUP",
    "CVE",
    "CZK",
    "DJF",
    "DKK",
    "DOP",
    "DZD",
    "EGP",
    "ERN",
    "ETB",
    "EUR",
    "FJD",
    "FKP",
    "GBP",
    "GEL",
    "GGP",
    "GHS",
    "GIP",
    "GMD",
    "GNF",
    "GTQ",
    "GYD",
    "HKD",
    "HNL",
    "HRK",
    "HTG",
    "HUF",
    "IDR",
    "ILS",
    "IMP",
    "INR",
    "IQD",
    "IRR",
    "ISK",
    "JEP",
    "JMD",
    "JOD",
    "JPY",
    "KES",
    "KGS",
    "KHR",
    "KMF",
    "KPW",
    "KRW",
    "KWD",
    "KYD",
    "KZT",
    "LAK",
    "LBP",
    "LKR",
    "LRD",
    "LSL",
    "LTL",
    "LVL",
    "LYD",
    "MAD",
    "MDL",
    "MGA",
    "MKD",
    "MMK",
    "MNT",
    "MOP",
    "MRU",
    "MUR",
    "MVR",
    "MWK",
    "MXN",
    "MYR",
    "MZN",
    "NAD",
    "NGN",
    "NIO",
    "NOK",
    "NPR",
    "NZD",
    "OMR",
    "PAB",
    "PEN",
    "PGK",
    "PHP",
    "PKR",
    "PLN",
    "PYG",
    "QAR",
    "RON",
    "RSD",
    "RUB",
    "RWF",
    "SAR",
    "SBD",
    "SCR",
    "SDG",
    "SEK",
    "SGD",
    "SHP",
    "SLE",
    "SLL",
    "SOS",
    "SRD",
    "STD",
    "SVC",
    "SYP",
    "SZL",
    "THB",
    "TJS",
    "TMT",
    "TND",
    "TOP",
    "TRY",
    "TTD",
    "TWD",
    "TZS",
    "UAH",
    "UGX",
    "USD",
    "UYU",
    "UZS",
    "VEF",
    "VES",
    "VND",
    "VUV",
    "WST",
    "XAF",
    "XAG",
    "XAU",
    "XCD",
    "XDR",
    "XOF",
    "XPF",
    "YER",
    "ZAR",
    "ZMK",
    "ZMW",
    "ZWL"
];

for (const currency of currencies) {
    const optionInFromDropdown = document.createElement("option");
    optionInFromDropdown.value = currency;
    optionInFromDropdown.text = currency;
    fromCurrencySelector.add(optionInFromDropdown);

    const optionInToDropdown = document.createElement("option");
    optionInToDropdown.value = currency;
    optionInToDropdown.text = currency;
    toCurrencySelector.add(optionInToDropdown);
}

fromCurrencySelector.value = "RON";
toCurrencySelector.value = "EUR";

const convert = () => {
    const amountToConvert = document.getElementById("amount").value;
    const fromCurrency = fromCurrencySelector.value;
    const toCurrency = toCurrencySelector.value;

    if (amountToConvert === "") {
        alert("Please enter an amount.");
        return;
    }

    const amountNumeric = parseFloat(amountToConvert);
    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}`;

    const conversionKey = `${fromCurrency}_${toCurrency}`;

    const storedConversion = localStorage.getItem(conversionKey);

    if (storedConversion) {
        const conversionRate = parseFloat(storedConversion);
        const finalAmount = amountNumeric * conversionRate;

        const resultText = document.getElementById('resultText');
        resultText.textContent = `${amountNumeric} ${fromCurrency} = ${finalAmount.toFixed(2)} ${toCurrency}`;
    } else {
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Response not ok: ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                if (data.result === "success") {
                    const conversionRate = data.conversion_rate;
                    const finalAmount = amountNumeric * conversionRate;

                    localStorage.setItem(conversionKey, conversionRate);

                    const resultText = document.getElementById('resultText');
                    resultText.textContent = `${amountNumeric} ${fromCurrency} = ${finalAmount.toFixed(2)} ${toCurrency}`;
                } else {
                    alert("Error: Unable to get exchange rate.");
                }
            })
            .catch(error => {
                console.error('Problem with the fetch:', error);
                alert("An error occurred while fetching the exchange rate.");
            });
    }

    localStorage.setItem('fromCurrency', fromCurrency);
    localStorage.setItem('toCurrency', toCurrency);
};

document.addEventListener('DOMContentLoaded', () => {
    const savedFromCurrency = localStorage.getItem('fromCurrency');
    const savedToCurrency = localStorage.getItem('toCurrency');

    if (savedFromCurrency) {
        fromCurrencySelector.value = savedFromCurrency;
    }
    if (savedToCurrency) {
        toCurrencySelector.value = savedToCurrency;
    }
});

convertButton.addEventListener("click", convert);
