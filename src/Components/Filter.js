import React from 'react';

const Filter = (props) => {
    return (
      <select onChange={props.updateCurrentTag} defaultValue='all'>
        <option value='all'>All</option>
        {props.tags.map(tag =>
          <option key={tag} value={tag}>{tag}</option>
        )}
      </select>
    );
  }
  Filter.defaultProps = {
    tags: [],
    updateCurrentTag: function() {}
  };

export default Filter;
