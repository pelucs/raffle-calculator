import StrategiesList from "./StrategiesList";
import clsx from "clsx";
import { useState, useEffect, useContext } from "react";
import { CalculatorContext } from "../../context/CalculatorContext";

export default () => {

  const { amount } = useContext(CalculatorContext);
  const [activeStrategies, setActiveStrategies] = useState<boolean>(false);
  const [formatCurrency, setFormatCurrency] = useState<string>("");
  const [fourMonths, setFourMonths] = useState<string>("");

  useEffect(() => {

    if(amount > 0){
      let formatNumber = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }),
          value = formatNumber.format(amount),
          valueFourMonths = formatNumber.format(amount * 4);
      
      setFormatCurrency(value);
      setFourMonths(valueFourMonths);
      setActiveStrategies(true);      

      scrollTop();
    } else{
      setActiveStrategies(false);
    }
    
  }, [amount]);

  const scrollTop = () => {
    let x = document.getElementById("container");

    if(x){
      document.documentElement.scrollTop = x.offsetTop;
    }
  }

  return(
    <div id="container" className={clsx("mt-20 w-full bg-black min-h-screen flex flex-col items-center", {
      "min-h-screen": activeStrategies,
      "h-0 overflow-hidden": !activeStrategies
    })}>
      <div className="mt-10 py-5 px-5 rounded w-full max-w-md bg-zinc-900 border border-zinc-800 
      flex flex-col items-center gap-3 transition-all">
        <strong className="text-zinc-100 ">
          Sua meta de vendas de
        </strong>

        <strong className="p-2 bg-black text-green-500 font-bold text-2xl rounded-md">
          {formatCurrency}
        </strong>

        <p className="text-zinc-400 text-center">
          Realizando essa mesma rifa durante 4 meses seguidos você atingirá um faturamento de <span className="text-green-500 font-bold">{fourMonths}</span>
        </p>
      </div>

      <StrategiesList amount={amount}/>
    </div>
  );
}