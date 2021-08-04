import "./style.css";

const Inputs = () => (
    <p className="calculator__formParagraph">
        <label className="calculator__formLabel">Chcę wymienić
            <input className="calculator__formField" type="number" min="10" max="100000"
                step="1" placeholder="1000" required />
        </label>
        <label className="calculator__formLabel">
            <select className="calculator__formField" name="currencyFrom">
                <option value="PLN" selected>PLN</option>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
                <option value="CHF">CHF</option>
                <option value="RUB">RUB</option>
            </select>
        </label>
        <label className="calculator__formLabel">na
            <select className="calculator__formField" name="currencyTo">
                <option value="PLN">PLN</option>
                <option value="EUR" selected>EUR</option>
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
                <option value="CHF">CHF</option>
                <option value="RUB">RUB</option>
            </select>
        </label>
    </p>
);

export default Inputs;