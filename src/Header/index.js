import "./style.css";

const Header = (props) => (
    <section className="header">
        <h1 className="header__title">{props.title}</h1>
        <p className="header__paragraph">{props.paragraph}</p>
    </section>
);

export default Header;