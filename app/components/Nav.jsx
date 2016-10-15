var React = require('react');
var {Link, IndexLink} = require('react-router');


// var Nav = React.createClass({
//   render: function () {

//   }
// });

var Nav = (props) => {
  return (
    <div>
      <h2>Navbar</h2>
      <IndexLink to="/" activeClasName="active" activeStyle={{ fontWeight: 'bold' }}>Get Weather</IndexLink>
      <Link to="/about" activeClasName="active" activeStyle={{ fontWeight: 'bold' }}>About</Link>
      <Link to="/examples" activeClasName="active" activeStyle={{ fontWeight: 'bold' }}>Examples</Link>
    </div>

  );
};

module.exports = Nav;  
