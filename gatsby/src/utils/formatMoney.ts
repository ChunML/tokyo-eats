const formatMoney = (amount: number): string =>
  Intl.NumberFormat("jp", { style: "currency", currency: "jpy" }).format(
    amount
  );

export default formatMoney;
