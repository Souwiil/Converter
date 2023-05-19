

function ConverterCurrencies({ currencies, selectedCurrency }) {
  return (
    <div className="ConverterCurrencies bg-white max-h-80 overflow-y-auto h-auto">
      <div className="ConverterCurrencies-title py-2 px-4 font-bold  text-yellow-800 text-3xl mb-3">Currencies</div>
      <ul className="ConverterCurrencies-list pl-0 ">
        {currencies.map((currency) => (
          <li
            className="ConverterCurrency y-2 px-4 mb-2 text-lg border-t-4 text-orange-400 border-indigo-200 font-medium transition duration-200 cursor-pointer hover:bg-slate-500 hover:duration-200"
            key={currency.name}
            onClick={() => selectedCurrency(currency)}
          >
            {currency.name}
            <span className="ConverterCurrency-flag pl-2">{currency.emoji}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ConverterCurrencies;