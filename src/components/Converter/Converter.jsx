import React, { useState } from "react";

import { currencyApi } from "api/currencyAPI";

export default function Converter() {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [firstCurrency, setFirstCurrency] = useState("UAH");
  const [secondCurrency, setSecondCurrency] = useState("USD");

  const handleChangeCurrency = async (e) => {
    const { name, value } = e.target;

    let data = null;
    switch (name) {
      case "firstCurrency":
        setFirstCurrency(value);

        if (!firstValue) {
          break;
        }

        data = await currencyApi.getConverted({
          from: value,
          to: secondCurrency,
          amount: firstValue,
        });

        setSecondValue(data.toFixed(2));
        break;
      case "secondCurrency":
        setSecondCurrency(value);

        if (!secondValue) {
          break;
        }

        data = await currencyApi.getConverted({
          from: value,
          to: firstCurrency,
          amount: secondValue,
        });

        setFirstValue(data.toFixed(2));
        break;
      default:
        break;
    }
  };

  const handleChangeValue = async (e) => {
    const { name, value } = e.target;

    let data = null;
    switch (name) {
      case "firstValue":
        setFirstValue(value);

        if (!value) {
          setSecondValue("");
          break;
        }
        data = await currencyApi.getConverted({
          from: firstCurrency,
          to: secondCurrency,
          amount: value,
        });

        setSecondValue(data.toFixed(2));
        break;
      case "secondValue":
        setSecondValue(value);

        if (!value) {
          setFirstValue("");
          break;
        }
        data = await currencyApi.getConverted({
          from: secondCurrency,
          to: firstCurrency,
          amount: value,
        });

        setFirstValue(data.toFixed(2));
        break;
      default:
        break;
    }
  };

  return (
    <section className="mt-3 flex flex-row justify-center gap-4">
      <div>
        <select
          className="h-[30px] rounded-l-md border border-r-0 py-1 pl-1 text-sm text-gray-500"
          name="firstCurrency"
          value={firstCurrency}
          onChange={handleChangeCurrency}
        >
          <option value="UAH" disabled={secondCurrency === "UAH"}>
            UAH
          </option>
          <option value="USD" disabled={secondCurrency === "USD"}>
            USD
          </option>
          <option value="EUR" disabled={secondCurrency === "EUR"}>
            EUR
          </option>
        </select>
        <input
          className="rounded-r-md border py-1 pl-1 text-sm "
          name="firstValue"
          value={firstValue}
          onChange={handleChangeValue}
          type="number"
        />
      </div>
      =
      <div>
        <input
          className="rounded-l-md border py-1 pl-1 text-sm "
          name="secondValue"
          value={secondValue}
          onChange={handleChangeValue}
          type="number"
        />
        <select
          className="h-[30px] rounded-r-md border border-l-0 py-1 pr-1 text-sm text-gray-500"
          name="secondCurrency"
          value={secondCurrency}
          onChange={handleChangeCurrency}
        >
          <option value="UAH" disabled={firstCurrency === "UAH"}>
            UAH
          </option>
          <option value="USD" disabled={firstCurrency === "USD"}>
            USD
          </option>
          <option value="EUR" disabled={firstCurrency === "EUR"}>
            EUR
          </option>
        </select>
      </div>
    </section>
  );
}
