import { BsCurrencyDollar, BsCurrencyEuro } from 'react-icons/bs';

const TowButton = () => {
  return (
    <div className="flex justify-end">
      <button className="px-3 py-1 text-gray-500 bg-blue-100 rounded-tl-full rounded-bl-full">
        <BsCurrencyDollar />
      </button>
      <button className="px-3 py-1 text-white bg-blue-500 rounded-tr-full rounded-br-full">
        <BsCurrencyEuro />
      </button>
    </div>
  );
};

export default TowButton;
