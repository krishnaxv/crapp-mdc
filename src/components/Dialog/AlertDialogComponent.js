import React, { Component, PropTypes } from 'react';
import { Motion } from 'react-motion';
import Dialog from './DialogComponent';
import Effect, { EffectConfig } from './Effect';

class AlertDialog extends Component {
  static propTypes = {
    register: PropTypes.bool.isRequired,
    effect: PropTypes.string.isRequired
  }
  constructor(props) {
    super(props);
    const effect = EffectConfig[props.effect];
    this.state = {
      register: props.register,
      dialog: effect,
      motion: effect.start,
      dirty: false
    };
  }
  componentDidMount() {
    if (this.state.register) {
      this.onShowDialog();
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.register) {
      this.onShowDialog();
    } else if (this.state.dirty && !nextProps.register) {
      this.onCloseDialog();
    }
  }
  componentDidUpdate() {
    if (this.state.register) {
      this.dialog.classList.remove('hide', 'close');
      Dialog.onShowDialog(this.dialogWrapper);
    }
  }
  onShowDialog() {
    this.setState({
      motion: this.state.dialog.start,
      register: true,
      dirty: true
    });
  }
  onCloseDialog() {
    this.dialogWrapper.classList.add('hide');
    setTimeout(() => this.dialogWrapper.classList.add('close'), 500);
    this.setState({
      motion: this.state.dialog.end,
      register: false
    });
  }
  onRestDialog() {
    if (!this.state.register) {
      Dialog.onCloseDialog(this.dialog);
      this.setState({
        dirty: false
      });
    }
  }
  onCloseDialogNotify() {
    this.onCloseDialog();
    this.props.returnCallback();
  }
  render() {
    if (!this.state.dirty) {
      return null;
    }
    return (
      <Motion defaultStyle={this.state.motion.from} style={this.state.motion.to} onRest={() => this.onRestDialog()}>
        {(value) => {
          const style = Effect[this.props.effect](value);
          return (
            <div className="dialogWrapper" ref={(dialogWrapper) => { this.dialogWrapper = dialogWrapper; }}>
              <section style={style} className="mdc-elevation-transition mdc-elevation--z24 dialog alertDialog" ref={(dialog) => { this.dialog = dialog; }}>
                <h3 className="alertDialogTitle">{this.props.title}</h3>
                <section className="alertDialogContent">{this.props.content}</section>
                <section className="mdc-card__actions alertDialogActions">
                  <button className="mdc-button mdc-button--compact mdc-card__action" onClick={() => this.onCloseDialogNotify()}>Do it!</button>
                  <button className="mdc-button mdc-button--compact mdc-card__action" onClick={() => this.onCloseDialog()}>Cancel</button>
                </section>
              </section>
            </div>
          );
        }}
      </Motion>
    );
  }
}

export default AlertDialog;
