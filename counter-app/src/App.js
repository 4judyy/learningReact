import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ]
  };

  constructor() {
    super();
  };

  componentDidMount() {

  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters })
  };

  handleDecrease = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters })
  }

  handleDelete = (id) => {
    const counters = this.state.counters.filter(c => c.id !== id);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    })
    this.setState({ counters })
  };

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.length} />
        <main className='container'>
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onDecrease={this.handleDecrease}
          />
        </main>
      </React.Fragment>
    );
  };

}

export default App;
