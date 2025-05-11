const exchangeRates = {
    VND: { USD: 0.000043, VND: 1 },
    USD: { VND: 23200, USD: 1 },
};

document.getElementById('convert-button').addEventListener('click', () => {
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (isNaN(amount) || amount <= 0) {
        document.getElementById('result').value = 'Invalid amount';
        return;
    }

    const rate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = amount * rate;

    document.getElementById('result').value = `${convertedAmount.toFixed(2)} ${toCurrency}`;
});