
function ConverterAmount({baseAmount, selectedCurrency}) {
  return (
    <div className="ConverterAmount bg-white py-2 text-center bg-orange-200 ">
      <p className="ConverterAmount-currency mt-2 text-3xl">{(baseAmount * selectedCurrency.rate).toFixed(2)}</p>
      <p className="ConverterAmount-value font-bold text-lg">{selectedCurrency.name}</p>
    </div>
  );
}

export default ConverterAmount;