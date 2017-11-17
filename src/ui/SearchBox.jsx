import React from 'react';
import SortModule from './SortModule';

function SearchBox({ onInput, onChange }) {
  const input = e => {
    onInput(e.target.value);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        onInput={input}
        className="search"
        placeholder="Search for a task..."
      />
      <SortModule onChange={onChange} />
    </div>
  );
}

export default SearchBox;
