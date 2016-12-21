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
    setTimeout(() => {
      this.setState({
        register: false
      });
    }, 10000);
  }
  render() {
    return (
      <div>
        <button onClick={() => this.onShowDialog()}>Show Dialog</button>
        <AlertDialog register={this.state.register} effect="FALL">
          Hello AlertDialog
        </AlertDialog>
        <ModalDialog />
      </div>
    );
  }
}

export default Main;
