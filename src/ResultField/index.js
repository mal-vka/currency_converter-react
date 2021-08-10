import "./style.css";

const ResultField = (props) => (
    <div className="calculator__resultField">
        {!!props.result && (
            <>
                {props.result.amount.toFixed(2)}&nbsp;{props.result.currencyFrom}=
                {" "}
                <strong>
                    {props.result.result.toFixed(2)}&nbsp;{props.result.currencyTo}
                </strong>
            </>
        )}
    </div>
);

export default ResultField;