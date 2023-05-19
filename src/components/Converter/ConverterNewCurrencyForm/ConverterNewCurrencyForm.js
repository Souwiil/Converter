import React from 'react';


class ConverterNewCurrencyForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      rate: 0,
    };
  }

  setName(newName) {
    this.setState({
      name: newName,
    });
  }

  setRate(newRate) {
    this.setState({
      rate: newRate,
    });
  }

  render() {
    const { addCurrency } = this.props;
    const { name, rate } = this.state;

    return (
      <form
        className="ConverterNewCurrencyForm"
        onSubmit={(event) => {
          event.preventDefault();
          addCurrency({
            name: name,
            rate: rate,
          });
        }}
      >
        <input
          type="text"
          placeholder="Nom de la devise"
          value={name}
          onChange={(event) => {
            this.setName(event.target.value);
          }}
        />
        <input
          type="number"
          step="0.01"
          placeholder="Taux de la devise"
          value={rate}
          onChange={(event) => {
            this.setRate(event.target.value);
          }}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default ConverterNewCurrencyForm;