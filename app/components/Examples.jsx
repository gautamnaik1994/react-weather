var React = require('react');
var {Link} = require('react-router');

// var Examples = React.createClass({
//     render() {
//         return (
//             <div>
//                 <h2>Examples</h2>
//             </div>
//         );
//     }
// });

var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">Examples</h1>
            <p>Examples Bel  ow</p>
            <ol>
                <li>
                    <Link to='/?location=Panjim'>Panjim</Link>
                </li>
                <li><Link to='/?location=London'>London</Link></li>
            </ol>
        </div>

    );
};

module.exports = Examples;