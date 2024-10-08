const apiKey = "868cf84936b710c94a34b54c";
const convertButton = document.getElementById('convertBtn');
const revertButton = document.getElementById('revertBtn');
const refreshButton = document.getElementById('refreshBtn');
const fromCurrencySelector = document.getElementById('fromCurrency');
const toCurrencySelector = document.getElementById('toCurrency');
const resultText = document.getElementById('resultText');
const amountInput = document.getElementById("amount");
const currencies = [
    { code: "AED", name: "United Arab Emirates Dirham" },
    { code: "AFN", name: "Afghan Afghani" },
    { code: "ALL", name: "Albanian Lek" },
    { code: "AMD", name: "Armenian Dram" },
    { code: "ANG", name: "Netherlands Antillean Guilder" },
    { code: "AOA", name: "Angolan Kwanza" },
    { code: "ARS", name: "Argentine Peso" },
    { code: "AUD", name: "Australian Dollar" },
    { code: "AWG", name: "Aruban Florin" },
    { code: "AZN", name: "Azerbaijani Manat" },
    { code: "BAM", name: "Bosnia-Herzegovina Convertible Mark" },
    { code: "BBD", name: "Barbadian Dollar" },
    { code: "BDT", name: "Bangladeshi Taka" },
    { code: "BGN", name: "Bulgarian Lev" },
    { code: "BHD", name: "Bahraini Dinar" },
    { code: "BIF", name: "Burundian Franc" },
    { code: "BMD", name: "Bermudian Dollar" },
    { code: "BND", name: "Brunei Dollar" },
    { code: "BOB", name: "Bolivian Boliviano" },
    { code: "BRL", name: "Brazilian Real" },
    { code: "BSD", name: "Bahamian Dollar" },
    { code: "BTC", name: "Bitcoin" },
    { code: "BTN", name: "Bhutanese Ngultrum" },
    { code: "BWP", name: "Botswana Pula" },
    { code: "BYN", name: "Belarusian Ruble" },
    { code: "BYR", name: "Belarusian Ruble (old)" },
    { code: "BZD", name: "Belize Dollar" },
    { code: "CAD", name: "Canadian Dollar" },
    { code: "CDF", name: "Congolese Franc" },
    { code: "CHF", name: "Swiss Franc" },
    { code: "CLF", name: "Chilean Unit of Account (UF)" },
    { code: "CLP", name: "Chilean Peso" },
    { code: "CNY", name: "Chinese Yuan" },
    { code: "CNH", name: "Chinese Yuan (Offshore)" },
    { code: "COP", name: "Colombian Peso" },
    { code: "CRC", name: "Costa Rican Colón" },
    { code: "CUC", name: "Cuban Convertible Peso" },
    { code: "CUP", name: "Cuban Peso" },
    { code: "CVE", name: "Cape Verdean Escudo" },
    { code: "CZK", name: "Czech Koruna" },
    { code: "DJF", name: "Djiboutian Franc" },
    { code: "DKK", name: "Danish Krone" },
    { code: "DOP", name: "Dominican Peso" },
    { code: "DZD", name: "Algerian Dinar" },
    { code: "EGP", name: "Egyptian Pound" },
    { code: "ERN", name: "Eritrean Nakfa" },
    { code: "ETB", name: "Ethiopian Birr" },
    { code: "EUR", name: "Euro" },
    { code: "FJD", name: "Fijian Dollar" },
    { code: "FKP", name: "Falkland Islands Pound" },
    { code: "GBP", name: "British Pound Sterling" },
    { code: "GEL", name: "Georgian Lari" },
    { code: "GGP", name: "Guernsey Pound" },
    { code: "GHS", name: "Ghanaian Cedi" },
    { code: "GIP", name: "Gibraltar Pound" },
    { code: "GMD", name: "Gambian Dalasi" },
    { code: "GNF", name: "Guinean Franc" },
    { code: "GTQ", name: "Guatemalan Quetzal" },
    { code: "GYD", name: "Guyanese Dollar" },
    { code: "HKD", name: "Hong Kong Dollar" },
    { code: "HNL", name: "Honduran Lempira" },
    { code: "HRK", name: "Croatian Kuna" },
    { code: "HTG", name: "Haitian Gourde" },
    { code: "HUF", name: "Hungarian Forint" },
    { code: "IDR", name: "Indonesian Rupiah" },
    { code: "ILS", name: "Israeli New Shekel" },
    { code: "IMP", name: "Isle of Man Pound" },
    { code: "INR", name: "Indian Rupee" },
    { code: "IQD", name: "Iraqi Dinar" },
    { code: "IRR", name: "Iranian Rial" },
    { code: "ISK", name: "Icelandic Krona" },
    { code: "JEP", name: "Jersey Pound" },
    { code: "JMD", name: "Jamaican Dollar" },
    { code: "JOD", name: "Jordanian Dinar" },
    { code: "JPY", name: "Japanese Yen" },
    { code: "KES", name: "Kenyan Shilling" },
    { code: "KGS", name: "Kyrgyzstani Som" },
    { code: "KHR", name: "Cambodian Riel" },
    { code: "KMF", name: "Comorian Franc" },
    { code: "KPW", name: "North Korean Won" },
    { code: "KRW", name: "South Korean Won" },
    { code: "KWD", name: "Kuwaiti Dinar" },
    { code: "KYD", name: "Cayman Islands Dollar" },
    { code: "KZT", name: "Kazakhstani Tenge" },
    { code: "LAK", name: "Lao Kip" },
    { code: "LBP", name: "Lebanese Pound" },
    { code: "LKR", name: "Sri Lankan Rupee" },
    { code: "LRD", name: "Liberian Dollar" },
    { code: "LSL", name: "Lesotho Loti" },
    { code: "LTL", name: "Lithuanian Litas" },
    { code: "LVL", name: "Latvian Lats" },
    { code: "LYD", name: "Libyan Dinar" },
    { code: "MAD", name: "Moroccan Dirham" },
    { code: "MDL", name: "Moldovan Leu" },
    { code: "MGA", name: "Malagasy Ariary" },
    { code: "MKD", name: "Macedonian Denar" },
    { code: "MMK", name: "Myanmar Kyat" },
    { code: "MNT", name: "Mongolian Tugrik" },
    { code: "MOP", name: "Macanese Pataca" },
    { code: "MRU", name: "Mauritanian Ouguiya" },
    { code: "MUR", name: "Mauritian Rupee" },
    { code: "MVR", name: "Maldivian Rufiyaa" },
    { code: "MWK", name: "Malawian Kwacha" },
    { code: "MXN", name: "Mexican Peso" },
    { code: "MYR", name: "Malaysian Ringgit" },
    { code: "MZN", name: "Mozambican Metical" },
    { code: "NAD", name: "Namibian Dollar" },
    { code: "NGN", name: "Nigerian Naira" },
    { code: "NIO", name: "Nicaraguan Córdoba" },
    { code: "NOK", name: "Norwegian Krone" },
    { code: "NPR", name: "Nepalese Rupee" },
    { code: "NZD", name: "New Zealand Dollar" },
    { code: "OMR", name: "Omani Rial" },
    { code: "PAB", name: "Panamanian Balboa" },
    { code: "PEN", name: "Peruvian Sol" },
    { code: "PGK", name: "Papua New Guinean Kina" },
    { code: "PHP", name: "Philippine Peso" },
    { code: "PKR", name: "Pakistani Rupee" },
    { code: "PLN", name: "Polish Zloty" },
    { code: "PYG", name: "Paraguayan Guarani" },
    { code: "QAR", name: "Qatari Rial" },
    { code: "RON", name: "Romanian Leu" },
    { code: "RSD", name: "Serbian Dinar" },
    { code: "RUB", name: "Russian Ruble" },
    { code: "RWF", name: "Rwandan Franc" },
    { code: "SAR", name: "Saudi Riyal" },
    { code: "SBD", name: "Solomon Islands Dollar" },
    { code: "SCR", name: "Seychellois Rupee" },
    { code: "SDG", name: "Sudanese Pound" },
    { code: "SEK", name: "Swedish Krona" },
    { code: "SGD", name: "Singapore Dollar" },
    { code: "SHP", name: "Saint Helena Pound" },
    { code: "SLL", name: "Sierra Leonean Leone" },
    { code: "SOS", name: "Somali Shilling" },
    { code: "SRD", name: "Surinamese Dollar" },
    { code: "SSP", name: "South Sudanese Pound" },
    { code: "STD", name: "São Tomé and Príncipe Dobra" },
    { code: "STN", name: "São Tomé and Príncipe Dobra (new)" },
    { code: "SVC", name: "Salvadoran Colón" },
    { code: "SYP", name: "Syrian Pound" },
    { code: "SZL", name: "Eswatini Lilangeni" },
    { code: "THB", name: "Thai Baht" },
    { code: "TJS", name: "Tajikistani Somoni" },
    { code: "TMT", name: "Turkmenistani Manat" },
    { code: "TND", name: "Tunisian Dinar" },
    { code: "TOP", name: "Tongan Paʻanga" },
    { code: "TRY", name: "Turkish Lira" },
    { code: "TTD", name: "Trinidad and Tobago Dollar" },
    { code: "TWD", name: "New Taiwan Dollar" },
    { code: "TZS", name: "Tanzanian Shilling" },
    { code: "UAH", name: "Ukrainian Hryvnia" },
    { code: "UGX", name: "Ugandan Shilling" },
    { code: "USD", name: "United States Dollar" },
    { code: "UYU", name: "Uruguayan Peso" },
    { code: "UZS", name: "Uzbekistani Som" },
    { code: "VES", name: "Venezuelan Bolívar Soberano" },
    { code: "VND", name: "Vietnamese Dong" },
    { code: "VUV", name: "Vanuatu Vatu" },
    { code: "WST", name: "Samoan Tala" },
    { code: "XAF", name: "Central African CFA Franc" },
    { code: "XAG", name: "Silver (troy ounce)" },
    { code: "XAU", name: "Gold (troy ounce)" },
    { code: "XCD", name: "East Caribbean Dollar" },
    { code: "XDR", name: "Special Drawing Rights" },
    { code: "XOF", name: "West African CFA Franc" },
    { code: "XPD", name: "Palladium (troy ounce)" },
    { code: "XPF", name: "CFP Franc" },
    { code: "XPT", name: "Platinum (troy ounce)" },
    { code: "YER", name: "Yemeni Rial" },
    { code: "ZAR", name: "South African Rand" },
    { code: "ZMK", name: "Zambian Kwacha (pre-2013)" },
    { code: "ZMW", name: "Zambian Kwacha" },
    { code: "ZWL", name: "Zimbabwean Dollar" }
];


for (const currency of currencies) {
    const optionInFromDropdown = document.createElement("option");
    optionInFromDropdown.value = currency.code;
    optionInFromDropdown.text = `${currency.code} - ${currency.name}`;
    fromCurrencySelector.add(optionInFromDropdown);

    const optionInToDropdown = document.createElement("option");
    optionInToDropdown.value = currency.code;
    optionInToDropdown.text = `${currency.code} - ${currency.name}`;
    toCurrencySelector.add(optionInToDropdown);
}

fromCurrencySelector.value = "RON";
toCurrencySelector.value = "EUR";

const convert = () => {
    const amountToConvert = amountInput.value;
    const fromCurrency = fromCurrencySelector.value;
    const toCurrency = toCurrencySelector.value;

    if (amountToConvert === "") {
        resultText.textContent = "Please enter an amount!";
        return;
    }

    const amountNumeric = parseFloat(amountToConvert);
    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}`;

    const conversionKey = `${fromCurrency}_${toCurrency}`;

    const storedConversion = localStorage.getItem(conversionKey);

    if (storedConversion) {
        const conversionRate = parseFloat(storedConversion);
        const finalAmount = amountNumeric * conversionRate;

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
                    resultText.textContent = "Error: Unable to get exchange rate!";
                }
            })
            .catch(error => {
                console.error('Problem with the fetch:', error);
                resultText.textContent = "An error occurred while fetching the exchange rate.!";
            });
    }
};

const revertConversion = () => {
    const tempCurrency = fromCurrencySelector.value;
    fromCurrencySelector.value = toCurrencySelector.value;
    toCurrencySelector.value = tempCurrency;
    convert();
};

const refreshForm = () => {
    amountInput.value = "";
    resultText.textContent = "Exchange Rate Here!";
    fromCurrencySelector.value = "RON";
    toCurrencySelector.value = "EUR";
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
revertButton.addEventListener("click", revertConversion);
refreshButton.addEventListener("click", refreshForm);
