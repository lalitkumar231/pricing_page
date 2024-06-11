// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    const monthlyToggle = document.getElementById('monthly');
    const yearlyToggle = document.getElementById('yearly');
    const currencySelect = document.getElementById('currency');
    const prices = document.querySelectorAll('.price');

    function updatePrices() {
        const currencySymbol = currencySelect.value;
        prices.forEach(price => {
            const amount = monthlyToggle.checked ? price.getAttribute('data-monthly') : price.getAttribute('data-yearly');
            price.textContent = `${currencySymbol}${amount}`;
        });
    }

    monthlyToggle.addEventListener('change', updatePrices);
    yearlyToggle.addEventListener('change', updatePrices);
    currencySelect.addEventListener('change', updatePrices);

    // Initial price update
    updatePrices();
});
