import { createContext, useState, ReactNode } from 'react';

interface CalculatorContextProviderProps{
  children: ReactNode;
}

interface AmountType{
  amount: number;
  setAmount: (newNumber: number) => void;
}

export const CalculatorContext = createContext<AmountType>({} as AmountType);

export const CalculatorContextProvider = ({ children }: CalculatorContextProviderProps) => {

  const [amount, setAmount] = useState<number>(0);

  return(
    <CalculatorContext.Provider value={{ amount, setAmount }}>
      {children}
    </CalculatorContext.Provider>
  );
}