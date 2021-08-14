import "./style.css";
import { useState } from "react";

const Form = ({ calcResult, resetResult, title, currencies }) => {
    const [amount, setAmount] = useState("100");
    const [currencyFrom, setCurrencyFrom] = useState(currencies[0].name);
    const [currencyTo, setCurrencyTo] = useState(currencies[1].name);

    const onEnterAmount = ({ target }) => setAmount(target.value);
    const onSelectCurrencyFromChange = ({ target }) => setCurrencyFrom(target.value);
    const onSelectCurrencyToChange = ({ target }) => setCurrencyTo(target.value);

    const onFormSubmit = (event) => {
        event.preventDefault();
        calcResult(amount, currencyFrom, currencyTo);
    };

    const onFormReset = (event) => {
        event.preventDefault();
        setAmount(100);
        setCurrencyFrom(currencies[0].name);
        setCurrencyTo(currencies[1].name);
        resetResult();
    };

    return (
        <form onSubmit={onFormSubmit} onReset={onFormReset} className="calculator__form" >
            <fieldset className="calculator__formFieldset">
                <legend className="calculator__formLegend">{title}</legend>
                <p className="calculator__formParagraph">
                    <label className="calculator__formLabel">Chcę wymienić
                        <input
                            value={amount}
                            onChange={onEnterAmount}
                            className="calculator__formField calculator__formField"
                            type="number" min="10" max="100000" step="1"
                            required
                        />
                    </label>
                    <label className="calculator__formLabel">
                        <select
                            value={currencyFrom}
                            onChange={onSelectCurrencyFromChange}
                            className="calculator__formField"
                            name="currencyFrom"
                        >
                            {currencies.map(currency => (
                                <option key={currency.id} value={currency.name}>
                                    {currency.name}
                                </option>
                            ))}
                        </select>
                    </label>
                    <label className="calculator__formLabel">na
                        <select
                            value={currencyTo}
                            onChange={onSelectCurrencyToChange}
                            className="calculator__formField"
                            name="currencyTo"
                        >
                            {currencies.map(currency => (
                                <option key={currency.id} value={currency.name}>
                                    {currency.name}
                                </option>
                            ))}
                        </select>
                    </label>
                </p>
                <p className="calculator__formParagraph">
                    <button className="button button--submit" type="submit">Oblicz</button>
                    <button className="button button--reset" type="reset">Wyczyść</button>
                </p>
            </fieldset>
        </form >
    );
};

export default Form;