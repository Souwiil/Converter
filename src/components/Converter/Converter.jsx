import React from 'react';

import currencies from '../../data/currencies';

import ConverterHeader from './ConverterHeader/ConverterHeader';
import ConverterToggler from './ConverterToggler/ConverterToggler';
import ConverterCurrencies from './ConverterCurrencies/ConverterCurrencies';
import ConverterAmount from './ConverterAmount/ConverterAmount';

class Converter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      baseAmount: 1,
      open: false,
      selectedCurrency: {
        name: 'Australian Dollar',
        rate: 1.665247,
      },
      search: '',
    };
  }


  setSearch(newSearch) {
    this.setState({
      search: newSearch,
    });
  }

  setBaseAmount(newBaseAmount) {
    this.setState({
      baseAmount: newBaseAmount,
    });
  }

  selectedCurrency (newCurrency) {
    this.setState({
      selectedCurrency: newCurrency,
    });
  }

  toggle() {
    const { open } = this.state;

    this.setState({
      open: !open,
    });
  }

  

  render() {
    
    const { baseAmount, open, selectedCurrency, search } = this.state;
  
    const filteredCurrencies = currencies.filter((currency) => {
      
      const lowerCaseCurrencyName = currency.name.toLowerCase();
      const lowerCaseSearch = search.toLowerCase();

      
      return lowerCaseCurrencyName.includes(lowerCaseSearch);
    });

    const foundCurrenciesTotal = filteredCurrencies.length;


    
    return (
      <div className="relative flex flex-col w-full border-8 border-orange-300">
        <ConverterHeader
          baseAmount={baseAmount}
          laFonctionQuiModifieLeState={(newBaseAmount) => {
            this.setBaseAmount(newBaseAmount);
          }}
          search={search}
          setSearch={(newSearch) => {
            this.setSearch(newSearch);
          }}
        />
        <ConverterToggler
          open={open}
          toggle={() => {
            this.toggle();
          }}
        />
       {open && (
          <ConverterCurrencies
            currencies={filteredCurrencies}
            selectedCurrency={(newCurrency) => {
              this.selectedCurrency(newCurrency);
            }}
          />
        )}
        <ConverterAmount
          baseAmount={baseAmount}
          selectedCurrency={selectedCurrency}
        />
        <p className='bg-white text-black font-bold text-center'>{foundCurrenciesTotal} devises trouvées</p>
      </div>
    );
  }
}

export default Converter;



















