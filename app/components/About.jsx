var React=require('react');

// var About=React.createClass({
//     render:function(){
//         return(<h2>About Component</h2>);
//     }
// });

// var About=(props)=><h2>About Co  mponent</h2>;

var About =(props)=>{
    return(
        <div>
         <h1 className="text-center page-title">About Component</h1>
         <p></p>
        </div>
       
    );
};

module.exports=About;