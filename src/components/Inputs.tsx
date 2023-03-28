import { useState, useContext } from 'react';
import { CalculatorContext } from '../context/CalculatorContext';

export default () => {

  const [premiumValue, setPremiumValue] = useState<number>(0);
  const [ads, setAds] = useState<number>(0);
  const [profit, setProfit] = useState<number>(0);

  const { setAmount } = useContext(CalculatorContext);

  const calculator = () => {
    let value = premiumValue.toString(),
        profitString = profit.toString()
    
    if(value.length > 0 && profitString.length > 0){
      setAmount(premiumValue + ads + profit);      
    } else{
      alert("PREENCHA OS CAMPOS OBRIGATORIOS")
    }
  }

  return(
    <div className="flex flex-col px-5 gap-10 items-center">
      <div className="mt-10 flex items-center justify-center flex-wrap gap-5">
        <div className="flex flex-col items-center gap-3">
          <label className="text-lg text-zinc-100" htmlFor="premiumValue">
            Valor do prêmio
          </label>

          <input
            type="text"
            id="premiumValue"
            value={'R$' + premiumValue}
            onChange={e => {
              let format = e.target.value.replace('R$', '')

              setPremiumValue(Number(format));
            }}
            placeholder="0,00"
            className="max-w-[320px] w-full h-[120px] p-3 bg-zinc-800 border-2 
            border-transparent hover:border-zinc-700 transition-all rounded-md text-zinc-100 
            outline-none focus:border-zinc-700 text-3xl font-bold appearance-none text-center"
          />

          <p className="w-[220px] text-zinc-400 text-sm text-center">
            Este valor é designado ao prêmio que está sendo sorteado
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <label className="text-lg text-zinc-100" htmlFor="ads">
            Anúncios (opcional)
          </label>

          <input
            type="text"
            id="ads"
            value={'R$' + ads}
            onChange={e => {
              let format = e.target.value.replace('R$', '')

              setAds(Number(format));
            }}
            placeholder="0,00"
            className="max-w-[320px] w-full h-[120px] p-3 bg-zinc-800 border-2 
            border-transparent hover:border-zinc-700 transition-all rounded-md text-zinc-100 
            outline-none focus:border-zinc-700 text-3xl font-bold appearance-none text-center"
          />
          

          <p className="w-[220px] text-zinc-400 text-sm text-center">
            Este valor é designado a anúncios e divulgações da rifa
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <label className="text-lg text-zinc-100" htmlFor="profit">
            Lucro desejado
          </label>

          <input
            type="text"
            id="profit"
            value={'R$' + profit}
            onChange={e => {
              let format = e.target.value.replace('R$', '')

              setProfit(Number(format));
            }}
            placeholder="0,00"
            className="max-w-[320px] w-full h-[120px] p-3 bg-zinc-800 border-2 
            border-transparent hover:border-zinc-700 transition-all rounded-md text-zinc-100 
            outline-none focus:border-zinc-700 text-3xl font-bold appearance-none text-center"
          />
          <p className="w-[220px] text-zinc-400 text-sm text-center">
            Este valor é o lucro que você deseja ganhar neste sorteio
          </p>
        </div>
      </div>

      <button 
        onClick={calculator}
        className="w-[240px] h-20 rounded-md text-zinc-100 bg-yellow-500 text-2xl font-bold
      hover:bg-yellow-600 transition-colors outline-none focus:outline-2 focus:outline-offset-4 focus:outline-yellow-500"
      >
        Calcular valores
      </button>
    </div>
  );
}
