import useComma from '@hooks/useComma';
import { PriceCardProps } from 'src/types';

export default function PriceCard({ text, price }: PriceCardProps) {
  let showPrice = useComma(price);
  return (
    <div className="bg-gray-50 p-8 mx-2 rounded-2xl text-center text-lg md:text-xl">
      <p>{text}</p>
      <p className="font-bold text-brand text-xl md:text-2xl">₩{showPrice}</p>
    </div>
  );
}
