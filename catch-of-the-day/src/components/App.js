import React from 'react';

import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'


class App extends React.Component {
  constructor(){
    //  inits the react component that we're extending
    super();
    this.addFish = this.addFish.bind(this)
    // getInitialState
    this.state = {
      fishes: {},
      order: {}
    };
  }

  // ADD FISH
  addFish(fish){
    // best practice: get a copy of your current state and then update the state
    // update state
    const fishes = {...this.state.fishes};
    // add in new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    // set state
    this.setState({ fishes })
  }

  // RENDER
  render(){
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    )
  }
}

export default App;
