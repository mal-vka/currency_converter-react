import "./style.css";

const Background = (props) => (

    <div class="background">
        <div class="container">
            {props.children}
        </div>
    </div>

);

export default Background;