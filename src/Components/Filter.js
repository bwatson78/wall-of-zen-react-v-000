import React from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';

const Filter = (props) => {
  return (
    <div className="input-group">
      <div className="input-group-btn">
        <DropdownButton className="dropdown-menu" onSelect={event => props.changeCurrentTag(event.target.eventKey)}>
          <MenuItem eventKey="">All</MenuItem>
          {props.tags.map(tag =>
            <MenuItem eventKey={tag}>{tag}</MenuItem>
          )}
        </DropdownButton>
      </div>
    </div>
    );
  }
  Filter.defaultProps = {
    tags: [],
    changeCurrentTag: function() {}
  };

export default Filter;
