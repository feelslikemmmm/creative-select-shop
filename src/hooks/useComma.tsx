export default function useComma(price: number) {
  let commaPrice = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return commaPrice;
}
