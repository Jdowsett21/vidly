import React from 'react';

const SearchBox = ({ value, onFilter }) => {
  return (
    <input
      type='text'
      name='query'
      className='form-control my-3'
      placeholder='Search...'
      value={value}
      onChange={e => onFilter(e.currentTarget.value)}
    />
  );
};

export default SearchBox;
