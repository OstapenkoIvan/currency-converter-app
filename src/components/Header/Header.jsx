import { useEffect, useState } from "react";

import { currencyApi } from "api/currencyAPI";

export default function Header() {
  const [currentRates, setCurrentRates] = useState({});

  useEffect(() => {
    currencyApi
      .getLatest()
      .then((data) => setCurrentRates(data))
      .catch((e) => console.log(e.message));
  }, []);
  const currentUsd = (1 / currentRates.USD).toFixed(2);
  const currentEur = (1 / currentRates.EUR).toFixed(2);

  return (
    <header className="flex  justify-center">
      <div className=" w-full  rounded-t-xl bg-indigo-400 py-3 text-center text-white">
        USD: {currentUsd} / EUR: {currentEur}
      </div>
    </header>
  );
}
