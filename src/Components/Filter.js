import React from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';

const Filter = (props) => {
  return (
    <DropdownButton title="Tags" id="tags-dropdown" onSelect={(event) => {props.changeCurrentTag(event)}}>
      <MenuItem eventKey="">All</MenuItem>
      {props.tags.map(tag =>
        <MenuItem eventKey={tag}>{tag}</MenuItem>
      )}
    </DropdownButton>
    );
  }
  Filter.defaultProps = {
    tags: [],
    changeCurrentTag: function() {}
  };

export default Filter;
