var React = require('react');


var HomeImage = function (props) {
  return ( 
    <div className="mdl-grid mdl-cell mdl-cell--6-col mdl-cell--12-col-tablet" style={props.style} id="right">
      <div className="mdl-cell-stretch img-cont">
        <img className="feature-image" src={props.image}></img>
      </div>
    </div>
  )
};

module.exports = HomeImage;