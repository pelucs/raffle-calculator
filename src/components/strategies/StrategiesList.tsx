import { useEffect, useState } from 'react';

import icon from '../../assets/currency.svg';

const numbers: Array<{ peoples: number, value: string }> = [
  {
    peoples: 50,
    value: ""
  },
  {
    peoples: 100,
    value: ""
  },
  {
    peoples: 150,
    value: ""
  },
  {
    peoples: 200,
    value: ""
  },
  {
    peoples: 250,
    value: ""
  },
  {
    peoples: 300,
    value: ""
  },
  {
    peoples: 400,
    value: ""
  },
  {
    peoples: 500,
    value: ""
  },
  {
    peoples: 1000,
    value: ""
  },
  {
    peoples: 5000,
    value: ""
  },
  {
    peoples: 10000,
    value: ""
  },
  {
    peoples: 50000,
    value: ""
  },
]

interface StrategiesProps{
  amount: number;
}

export default ({ amount }: StrategiesProps) => {

  const [billing, setBilling] = useState<string>("");

  useEffect(() => {
    let formatNumber = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

    numbers.forEach(number => {
      number.value = formatNumber.format(amount / number.peoples );  
    })

    setBilling(formatNumber.format(amount));
    
  }, [amount]);

  return(
    <div className="mt-20 pb-20 px-5 md:px-20">
      <div className="flex flex-col gap-5 items-center">
        <strong className="text-2xl text-zinc-100 text-center">
          Confira algumas estratégias que preparamos para você
        </strong>

        <div className="w-full max-w-sm h-1 bg-yellow-500"/>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {
          numbers.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-5 border border-zinc-800 bg-zinc-900 rounded-md"
            >
              <img src={icon} alt="ícon de dinheiro" className="w-[30px]"/>

              <div className="text-zinc-100 font-bold">
                <h1>
                  Sorteio com <span className="text-yellow-500">{item.peoples}</span> números vendendo a <span className="text-yellow-500">{item.value}</span> cada
                </h1>

                <p className="mt-1 text-zinc-400 text-xs">
                  Seu faturamento {billing}
                </p>
              </div>
            </div>  
          ))
        }
      </div>
    </div>
  );
}