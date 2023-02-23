import PropTypes from "prop-types";

/**
 * Component displaying button.
 * @component
 * @param {Object} props - Component's props
 * @param {string} props.btnLink - The link of the button
 * @param {string} props.btnStyle - The className of the button
 * @param {string} props.label - The label of the button
 * @returns {JSX.Element}
 */
const LinkButton = ({ btnLink, btnStyle, label }) => {
    return (
        <a href={btnLink} className={btnStyle}>{label}</a>
    );
};

LinkButton.propTypes = {
    btnLink: PropTypes.string.isRequired,
    btnStyle: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default LinkButton;