import React from 'react';

const Filter = (props) => {
  return (
      <select onChange={event => props.changeCurrentTag(event.target.value)} defaultValue='all'>
        <option value='all'>All</option>
        {props.tags.map(tag =>
          <option key={tag} value={tag}>{tag}</option>
        )}
      </select>
    );
  }
  Filter.defaultProps = {
    tags: [],
    changeCurrentTag: function() {}
  };

export default Filter;
