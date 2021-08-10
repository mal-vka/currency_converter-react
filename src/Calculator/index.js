import "./style.css";

const Calculator = (props) => (
    <div className="calculator">
        {props.body} {props.resultField}
    </div>
);

export default Calculator;