import React from 'react';

const SearchDetails = ({ type, placeholder, className, onChange }) => {
    return (
        <input type={type} placeholder={placeholder} className={className} onChange={onChange} />
    );
};

SearchDetails.defaultProps = {
    type: 'text',
    placeholder: 'Search',
    className: 'search-textbox'
};

export default SearchDetails;