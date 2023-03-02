const Search = ({ label, onChange, customStyle }) => {
    return (
        <div className={customStyle}>
            <label className="search__label">{ label }</label>
            <input
                type="text"
                className="search__input"
                onChange={onChange}
            />
        </div>
    );
};

export default Search;