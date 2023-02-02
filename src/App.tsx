import { useContext } from 'react';
import { CalculatorContext } from "./context/CalculatorContext";

import Footer from "./components/Footer";
import Inputs from "./components/Inputs";
import StrategiesContent from "./components/strategies/StrategiesContent";

export default () => {

  const { amount } = useContext(CalculatorContext);

  return(
    <div className="min-h-screen flex flex-col justify-between bg-zinc-900">
      <div className="mt-20 flex flex-col items-center justify-center">
        <strong className="text-center text-5xl font-bold text-zinc-100">
          Calculadora de Rifas
        </strong>

        <p className="text-zinc-400 text-xl mt-5">
          Preencha todos os dados corretamente
        </p>
      </div>

      <Inputs/>
      
      {amount > 0 && <StrategiesContent/>}

      <Footer/>
    </div>
  );
}