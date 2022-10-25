const URL = "https://api.exchangerate.host/";

export const currencyApi = {
  async getLatest() {
    const { rates } = await (
      await fetch(`${URL}latest?base=UAH&symbols=USD,EUR`)
    ).json();

    return rates;
  },

  async getConverted({ from = "UAH", to = "USD", amount = "1" }) {
    const { result } = await (
      await fetch(`${URL}convert?from=${from}&to=${to}&amount=${amount}`)
    ).json();

    return result;
  },
};
