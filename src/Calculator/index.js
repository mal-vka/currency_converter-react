import "./style.css";

const Calculator = (props) => (
    <div class="calculator">
        {props.body} {props.result}
    </div>

);

export default Calculator;