import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    render() {

        const { onReset, counters, onDelete, onIncrement, onDecrease } = this.props;

        return (<div>
            <button className='button' onClick={onReset}>Reset</button>
            {counters.map(counter => <Counter
                key={counter.id}
                onDelete={onDelete}
                onIncrement={onIncrement}
                onDecrease={onDecrease}
                counter={counter}>
                <h4>Counter #{counter.id}</h4>
            </Counter>)
            }
        </div>);
    }
}

export default Counters;