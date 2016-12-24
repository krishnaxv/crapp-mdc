import React, { Component } from 'react';
// import { drawer as MDCDrawer } from 'material-components-web/dist/material-components-web';
import { AlertDialog, ModalDialog } from '../Dialog';

// const { MDCTemporaryDrawer } = MDCDrawer;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      register: false,
      title: 'Just do it!',
      content: 'I said, "Just do it!". Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ut quaerat itaque minus ab quas ipsum iure consequatur voluptatibus architecto assumenda dolores, eveniet error deleniti iusto iste repudiandae. Beatae, iste?'
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
  onReturnDialog() {
    console.log('onReturnDialog');
  }
  render() {
    return (
      <div>
        <button onClick={() => this.onShowDialog()}>Show Dialog</button>
        <AlertDialog register={this.state.register} effect="ROTATE_IN" title={this.state.title} content={this.state.content} returnCallback={() => this.onReturnDialog()} />
      </div>
    );
  }
}

export default Main;
