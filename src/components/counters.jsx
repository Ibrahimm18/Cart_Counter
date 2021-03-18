import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {
    
    render() { 
        console.log("Counters-Rendered");

        const  {onDelete,counters,onIncrement,onReset} = this.props;
      
        return ( 
        <React.Fragment>
            <button 
            onClick = {onReset}
            className="btn btn-primary btn-sm m-2">Reset</button>
        {counters.map(counter => 
        <Counter
        key={counter.id} 
        onIncrement = {onIncrement}
        onDelete={onDelete} 
        
        counter = {counter}>
            
        </Counter>    
            )}
        </React.Fragment>
         );
    }
}
 
export default Counters;
