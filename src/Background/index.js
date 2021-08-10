import "./style.css";

const Background = (props) => (
    <div className="background">
        <div className="container">
            {props.children}
        </div>
    </div>
);

export default Background;