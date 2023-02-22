import Header from "./Header";
import Footer from "./Footer";
import PropTypes from "prop-types";

/**
 * The Layout component returns a JSX element that contains Header and Footer components and main.
 * @component
 * @param {Object} props - Component's props
 * @param {Object} props.children - The content to be rendered inside the Layout component
 * @returns {JSX.Element}
 */
const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className="main">{children}</main>
            <Footer />
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;