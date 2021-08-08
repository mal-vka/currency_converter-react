import "./style.css";

const Calculator = (props) => (
    <div className="calculator">
        {props.body} {props.result}
    </div>

);

export default Calculator;