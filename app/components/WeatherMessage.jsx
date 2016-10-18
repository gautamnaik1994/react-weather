var React = require('react');


// var WeatherMessage = React.createClass({
//     render() {
//         var {temp, location} = this.props;
//         return (
//             <div>
//                 <h2>Temparture is {temp}at {location} </h2>
//             </div>
//         );
//     }
// });

var WeatherMessage = ( {temp, location}) => {

    // var {temp, location} = props;
    return (
        <div>
            <h3 className="text-center">Temparture is {temp} in {location} </h3>
        </div>
    );


};

module.exports = WeatherMessage;