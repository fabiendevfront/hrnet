import logo from "../assets/logo.png";

const Footer = () => {
    return (
        <footer className="footer">
            <img src={logo} className="footer__logo" alt="Logo du site Hrnet" />
            <p className="footer__copyright">
                Copyright, Wealth Health {new Date().getFullYear()}
            </p>
        </footer>
    );
};

export default Footer;