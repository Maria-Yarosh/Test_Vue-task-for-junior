export const getWordItem = (number: number): string => {
  const lastDigit = number % 10
  const lastTwoDigits = number % 100

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return 'товаров'
  } else if (lastDigit === 1) {
    return 'товар'
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    return 'товара'
  } else {
    return 'товаров'
  }
}
