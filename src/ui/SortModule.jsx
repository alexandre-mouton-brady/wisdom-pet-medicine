import React from 'react';

function SortModule({ onChange }) {
  const sort = ['petName', 'petOwner'];

  const change = e => {
    const val = sort[e.target.selectedIndex];
    onChange(val);
  };

  return (
    <div className="select">
      <select onChange={change}>
        {sort.map((item, i) => <option key={i}>{item}</option>)}
      </select>
    </div>
  );
}

export default SortModule;
