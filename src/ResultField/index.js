import "./style.css";

const ResultField = ({ result }) => (
    <div className="calculator__resultField">
        {!!result && (
            <>
                {result.amount.toFixed(2)}&nbsp;{result.currencyFrom}
                {" "}
                =
                {" "}
                <strong>
                    {result.result.toFixed(2)}&nbsp;{result.currencyTo}
                </strong>
            </>
        )}
    </div>
);

export default ResultField;