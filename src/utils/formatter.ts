function formatCurrency(value: string): string {
  const number = parseFloat(value);
  if (isNaN(number)) {
    throw new Error('Invalid number format');
  }
  return number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export { formatCurrency };
