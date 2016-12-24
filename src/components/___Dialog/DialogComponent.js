import dialogPolyfill from 'dialog-polyfill';

class Dialog {
  static onShowDialog(dialog) {
    dialogPolyfill.registerDialog(dialog);
    dialog.showModal();
  }

  static onCloseDialog(dialog) {
    dialog.close();
  }
}

export default Dialog;
