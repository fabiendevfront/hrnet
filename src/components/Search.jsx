import PropTypes from "prop-types";

/**
* Search component that displays a label and an input
* @component
* @param {string} label - Label to be display for search input
* @param {function} onChange - Function to call when the user types in search input
* @param {string} customStyle - Custom style for search component
* @returns {JSX.Element}
*/
const Search = ({ label, onChange, customStyle }) => {
    return (
        <div className={customStyle}>
            <label htmlFor="search" id="search" className="search__label">{label}</label>
            <input
                name="search"
                type="text"
                className="search__input"
                onChange={onChange}
                aria-labelledby="search"
            />
        </div>
    );
};

Search.propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    customStyle: PropTypes.string
};

export default Search;