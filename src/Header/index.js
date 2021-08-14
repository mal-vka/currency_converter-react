import "./style.css";

const Header = ({ title, paragraph }) => (
    <section className="header">
        <h1 className="header__title">{title}</h1>
        <p className="header__paragraph">{paragraph}</p>
    </section>
);

export default Header;