var React = require('react');

var style = "mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--2-col-phone";
var Navigation = function () {
  return (
    <nav className="mdl-grid">
      <div className={style}><h2>Rosalind Skinner</h2>
      <h2>Creative Coder</h2></div>
      <div className={style}><h2>contact</h2>
      <h2>news</h2></div>
      <div className={style}></div>
    </nav>
  )
}

module.exports = Navigation;