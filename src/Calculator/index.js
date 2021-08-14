import "./style.css";

const Calculator = ({ body, resultField }) => (
    <div className="calculator">
        {body} {resultField}
    </div>
);

export default Calculator;