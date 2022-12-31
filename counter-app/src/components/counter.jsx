import React, { Component } from 'react';

class Counter extends Component {

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    styles = {
        fontSize: 19,
        fontWeight: 'bold',
    };

    render() {
        console.log(this.props.id);
        return (

            <div>
                {this.props.children}
                <span className={this.getBadgeClasses()}>{this.formalCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn">Increment</button>
                <button className='button' onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formalCount() {
        return (this.props.counter.value === 0 ? 'Zero' : this.props.counter.value);
    }

}

export default Counter;