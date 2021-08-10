import "./style.css";
import { useState } from "react";
import { currencies } from "../utils/currencies";

const Form = (props) => {

    const [amount, setAmount] = useState("100");
    const [currencyFrom, setCurrencyFrom] = useState(currencies[0].name);
    const [currencyTo, setCurrencyTo] = useState(currencies[1].name);

    const onEnterAmount = (event) => setAmount(event.target.value);
    const onSelectCurrencyFromChange = (event) => setCurrencyFrom(event.target.value);
    const onSelectCurrencyToChange = (event) => setCurrencyTo(event.target.value);

    const onFormSubmit = (event) => {
        event.preventDefault();
        props.calcResult(amount, currencyFrom, currencyTo);
    };

    return (
        <form onSubmit={onFormSubmit} className="calculator__form" >
            <fieldset className="calculator__formFieldset">
                <legend className="calculator__formLegend">{props.title}</legend>
                <p className="calculator__formParagraph">
                    <label className="calculator__formLabel">Chcę wymienić
                        <input
                            value={amount}
                            onChange={onEnterAmount}
                            className="calculator__formField calculator__formField--amount"
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
                            {props.currencies.map(currency => (
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
                            {props.currencies.map(currency => (
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
    )
}

export default Form;