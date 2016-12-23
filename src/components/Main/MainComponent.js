import React, { Component } from 'react';
// import { drawer as MDCDrawer } from 'material-components-web/dist/material-components-web';
import { AlertDialog, ModalDialog } from '../Dialog';

// const { MDCTemporaryDrawer } = MDCDrawer;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      register: false
    };
  }
  // componentDidMount() {
    // const drawer = new MDCTemporaryDrawer(document.querySelector('.mdc-temporary-drawer'));
    // document.querySelector('.demo-menu').addEventListener('click', () => {
    //   drawer.open = true;
    // });
  // }
  onShowDialog() {
    this.setState({
      register: true
    });
  }
  render() {
    return (
      <div>
        <button onClick={() => this.onShowDialog()}>Show Dialog</button>
        <AlertDialog register={this.state.register} effect="SIDE_FALL">
          <h1>Hello AlertDialog</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </AlertDialog>
      </div>
    );
  }
}

export default Main;
