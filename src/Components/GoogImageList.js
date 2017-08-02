//"kind": "customsearch#result",
// "title": "You'll Never Unsee This Hidden Image on Original 'Halloween' Poster",
// "htmlTitle": "You&#39;ll Never Unsee This Hidden Image on Original &#39;<b>Halloween</b>&#39; <b>Poster</b>",
// "link": "http://bloody-disgusting.com/news/3411939/hidden-treat-on-original-halloween-poster/",
// "displayLink": "bloody-disgusting.com",
// "snippet": "Oct 25, 2016 ... Artist Bob Gleason is the man responsible for the iconic original Halloween \nposter art, but from what I gather, he had no idea about this hidden ...",
// "htmlSnippet": "Oct 25, 2016 <b>...</b> Artist Bob Gleason is the man responsible for the iconic original <b>Halloween</b> <br>\n<b>poster</b> art, but from what I gather, he had no idea about this hidden&nbsp;...",
// "cacheId": "aU8eObngZTUJ",
// "formattedUrl": "bloody-disgusting.com/.../hidden-treat-on-original-halloween-poster/",
// "htmlFormattedUrl": "bloody-disgusting.com/.../hidden-treat-on-original-<b>halloween</b>-<b>poster</b>/",
import React, {Component} from 'react';
import RenderGoogImage from './RenderGoogImage';
import {Link} from 'react-router';

class GoogImageList extends Component {

  render() {
    return (
      <div key="list container-fluid" className='google-image-list'>
        {this.props.images ?
          this.props.images.map((image, index) =>
            <div className="pic col-md-3">
              <Link to={`/search/${image.id}`}>
                  <RenderGoogImage key={image.id} image={image} />
              </Link>
            </div>)
         : null}
      </div>
    )
  }
}

export default GoogImageList;
