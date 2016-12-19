/* @flow */

import React, { Component } from 'react';
import dialogPolyfill from 'dialog-polyfill';
import { drawer as MDCDrawer } from 'material-components-web/dist/material-components-web';

const { MDCTemporaryDrawer } = MDCDrawer;

class Main extends Component {
  componentDidMount() {
    const drawer = new MDCTemporaryDrawer(document.querySelector('.mdc-temporary-drawer'));
    document.querySelector('.demo-menu').addEventListener('click', () => {
      drawer.open = true;
    });

    document.body.addEventListener('keydown', (e) => {
      if (e.target.nodeName.toLowerCase() === 'body' && e.keyCode === 78) {
        e.stopImmediatePropagation();
        const dialog = document.querySelector('dialog');
        dialogPolyfill.registerDialog(dialog);
        dialog.showModal();
      }
    });
  }
  render() {
    return (
      <div>
        <dialog className="mdc-elevation-transition mdc-elevation--z8">Hello</dialog>
        <div className="demo-toolbar mdc-theme--primary-bg mdc-theme--text-primary-on-primary mdc-typography--title mdc-elevation--z4">
          <button className="demo-menu material-icons">menu</button>
        </div>
        <input type="text" />
        <aside className="mdc-temporary-drawer mdc-typography">
          <nav className="mdc-temporary-drawer__drawer">
            <header className="mdc-temporary-drawer__header">
              <div className="mdc-temporary-drawer__header-content mdc-theme--primary-bg mdc-theme--text-primary-on-primary">
                Header here
              </div>
            </header>
            <nav id="icon-with-text-demo" className="mdc-temporary-drawer__content mdc-list">
              <a className="mdc-list-item mdc-temporary-drawer--selected" href="#">
                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">inbox</i>Inbox
              </a>
              <a className="mdc-list-item" href="#">
                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">star</i>Star
              </a>
            </nav>
          </nav>
        </aside>
      </div>
    );
  }
}

export default Main;
