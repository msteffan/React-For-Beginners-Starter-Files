import React from 'react';
import {getFunName} from '../helpers'
class StorePicker extends React.Component {
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }
  goToStore(event){
    // prevents default page refresh
    event.preventDefault();
    // grab text from input field
    const storeId = this.storeInput.value;
    // transition URL to /store/:storeId
    this.context.router.transitionTo(`/store/${ storeId }`)
  }
  render(){
    return (
      <form className="store-selector" onSubmit={ (e) => this.goToStore(e) }>
        <h2>Please enter a store</h2>
        { /* This is a JSX comment example! */ }
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()}
          ref={(input) => { this.storeInput = input }} />
        <button type="submit">Visit Store -> </button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
