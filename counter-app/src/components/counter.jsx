import React, { Component } from 'react';
import './styles.css';

class Counter extends Component {
    state = {
        count: 0,
        tags: []
    };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    styles = {
        fontSize: 19,
        fontWeight: 'bold',
    };

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <div>
                {this.state.tags.length === 0 && "Please add a new tag!"}
                {this.renderTags()}
                <span className={this.getBadgeClasses()}>{this.formalCount()}</span>
                <button onClick={this.handleIncrement} className="btn">Increment</button>

            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formalCount() {
        return (this.state.count === 0 ? 'Zero' : this.state.count);
    }

}

export default Counter;