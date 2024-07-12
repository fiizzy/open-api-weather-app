// Generates a random 4 decimal place number
export function generateRandomDecimal(): number {
  const integerPart = Math.floor(Math.random() * 100);
  const decimalPart = Math.floor(Math.random() * 10000);
  const result = parseFloat(
    `${integerPart}.${decimalPart.toString().padStart(4, "0")}`
  );

  return Number(result.toFixed(4));
}
