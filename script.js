const exchangeRates = {
    NPR: {
        USD: 0.0075,
        INR: 0.62,
        Riyal: 0.028,
        EUR: 0.0067,
        GBP: 0.0057
    },
    USD: {
        NPR: 133.47,
        INR: 82.51,
        Riyal: 3.75,
        EUR: 0.89,
        GBP: 0.76
    },
    INR: {
        NPR: 1.61,
        USD: 0.012,
        Riyal: 0.045,
        EUR: 0.011,
        GBP: 0.0092
    },
    Riyal: {
        NPR: 35.60,
        USD: 0.27,
        INR: 22.22,
        EUR: 0.24,
        GBP: 0.20
    },
    EUR: {
        NPR: 149.70,
        USD: 1.12,
        INR: 89.65,
        Riyal: 4.16,
        GBP: 0.85
    },
    GBP: {
        NPR: 175.50,
        USD: 1.31,
        INR: 105.49,
        Riyal: 4.92,
        EUR: 1.18
    }
};

function convert() {
    const inputValue = document.getElementById('inputValue').value;
    const inputCurrency = document.getElementById('inputCurrency').value;
    const outputCurrency = document.getElementById('outputCurrency').value;
    const resultElement = document.getElementById('result');

    if (!inputValue) {
        resultElement.textContent = 'Please enter a value.';
        return;
    }

    if (inputCurrency === outputCurrency) {
        resultElement.textContent = `1 ${inputCurrency} is equal to 1 ${outputCurrency}.`;
        return;
    }

    const rate = exchangeRates[inputCurrency][outputCurrency];
    const result = inputValue * rate;

    resultElement.textContent = `${inputValue} ${inputCurrency} is equal to ${result.toFixed(2)} ${outputCurrency}.`;
}
