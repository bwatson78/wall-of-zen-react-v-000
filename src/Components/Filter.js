import React from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';

const Filter = (props) => {
  return (
    <DropdownButton title="Tags" onSelect={event => props.changeCurrentTag(event.target.value)}>
      <MenuItem value="">All</MenuItem>
      {props.tags.map(tag =>
        <MenuItem value={tag}>{tag}</MenuItem>
      )}
    </DropdownButton>
    );
  }
  Filter.defaultProps = {
    tags: [],
    changeCurrentTag: function() {}
  };

export default Filter;
