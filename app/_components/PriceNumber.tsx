import React from 'react';

const PriceNumber = ({ number }: { number: number }) => {
  const [integerPart, fractionalPart] = number.toString().split('.');

  return (
    <div className="flex tems-baseline">
      <span className="relative top-1 text-sm">$</span>
      <span className="text-3xl font-bold">{integerPart}</span>
      <span className="text-md relative top-1">{fractionalPart}</span>
    </div>
  );
};

export default PriceNumber;
