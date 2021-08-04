import "./style.css";

const Buttons = () => (
    <p className="calculator__formParagraph">
        <button className="button button--submit" type="submit">Oblicz</button>
        <button className="button button--reset" type="reset">Wyczyść</button>
    </p>
);

export default Buttons;