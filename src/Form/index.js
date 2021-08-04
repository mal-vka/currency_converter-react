import "./style.css";

const Form = (props) => (
    <form className="calculator__form">
        <fieldset className="calculator__formFieldset">
            <legend className="calculator__formLegend">{props.title}</legend>

        </fieldset>
    </form>
)

export default Form;