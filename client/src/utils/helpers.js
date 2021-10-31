export const calculateDiscountedPrice = (base, discountAmount) => {
  if (discountAmount === 0) return base;

  const price = Number(base) - (Number(base) * Number(discountAmount)) / 100;

  return (Math.round(price * 100) / 100).toFixed(2);
};
