import { useState } from "react";
import { useAppStore } from "../store/";

export function useCredits() {
  const store = useAppStore();
  const [amount, setAmount] = useState(1000);

  const handleTopUp = () => {
    if (amount > 0) {
      store.topUpCredits(amount);
    }
  };

  return {
    credits: store.credits,
    amount,
    setAmount,
    handleTopUp,
  };
}
