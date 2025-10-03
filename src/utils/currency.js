function formatCurrency(n, currency = 'NGN') {
  const num = Number(n);
  if (isNaN(num)) return currency === 'NGN' ? '₦0.00' : '0.00';
  if (currency === 'NGN') {
    // Format with comma as thousands separator, 2 decimals, and ₦
    return '₦' + num.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  return num.toFixed(2);
}

export { formatCurrency };

