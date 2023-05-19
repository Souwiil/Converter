

function ConverterHeader({ 
  baseAmount,
  laFonctionQuiModifieLeState,
  search,
  setSearch,}) {

  return (
    <header className="ConverterHeader bg-amber-600 h-auto text-white py-2 px-0 text-center">
      <h1 className="ConverterHeader-title text-3xl font-bold">Converter</h1>
      <p className="ConverterHeader-amount mt-0 mb-0 text-2xl">
        <input
        className="w-full h-[30px] text-center border-0 text-black"
          type="number"
          value={baseAmount}
          onChange={(event) => {
            // console.log(event);
            laFonctionQuiModifieLeState(event.target.value);
          }}
        />
        euro
      </p>
      <input
        className="ConverterHeader-search w-full h-[30px] text-center border-0 text-black"
        type="search"
        placeholder="Recherche..."
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
    </header>
  );
}

export default ConverterHeader;