export const calculateDiscountedPrice = (base, discountAmount) => {
  if (discountAmount === 0) return base;

  const price =
    parseFloat(base) - (parseFloat(base) * parseFloat(discountAmount)) / 100;

  return price.toFixed(2);
};
